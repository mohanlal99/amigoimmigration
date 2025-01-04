"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Calendar,
  CheckCircle,
  Eye,
  Loader,
  Send,
  Upload,
  X,
  XCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Modal, ModalContent } from "@nextui-org/modal";
import { Image } from "@nextui-org/image";
import { Checkbox, Link } from "@nextui-org/react";

import { schema } from "./validation";
import SuccessModal from "./SuccessModal";
type FormData = z.infer<typeof schema>;

const Apply = () => {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    username: "",
    message: "",
    error: false,
  });
  const router = useRouter();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleCvUpload = async (file: File | null) => {
    if (!file) {
      setUploadError("Please select a file to upload.");

      return;
    }
    setIsUploading(true);
    setUploadError(null);

    try {
      const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
      const maxFileSize = 2 * 1024 * 1024;

      if (!allowedTypes.includes(file.type)) {
        throw new Error("Only PDF, JPEG, or PNG files are allowed.");
      }

      if (file.size > maxFileSize) {
        throw new Error("File size must not exceed 2 MB.");
      }

      const formData = new FormData();

      formData.append("cv", file);

      const response = await fetch(`/api/upload/cv`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload CV.");
      }

      const result = await response.json();

      setUploadedUrl(result.url);
      setValue("cv", result.url);
      setUploadError(null);
    } catch (error: any) {
      setUploadError(error.message || "Failed to upload CV. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/submit-application`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit application.");
      }

      setModalContent({
        username: result.data.name,
        message: `Thank you, ${result.data.name}. Your application has been submitted successfully! Our team will contact you soon.`,
        error: false,
      });
      setIsSuccessModalOpen(true);

      setTimeout(() => {
        setIsSuccessModalOpen(false);
        router.push("/");
      }, 3000);

      reset();
    } catch (error: any) {
      setModalContent({
        username: "User",
        message:
          error.message || "An unexpected error occurred. Please try again.",
        error: true,
      });
      setIsSuccessModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card isBlurred className="w-full max-w-4xl shadow-none mx-auto ">
      <CardHeader className="flex flex-col gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8">
        <h1 className="text-3xl font-bold text-center">Apply for Internship</h1>
        <p className="text-center text-gray-100">
          Fill out the form below to submit your application
        </p>
      </CardHeader>
      <CardBody>
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <>
                <Input
                  {...field}
                  fullWidth
                  className=""
                  label="Name"
                  placeholder="Enter your full name"
                  variant="bordered"
                />
                {errors.name?.message && (
                  <p className="text-[10px] text-red-500 pl-4">
                    {errors.name?.message}
                  </p>
                )}
              </>
            )}
          />

          {/* Email Field */}
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <>
                <Input
                  {...field}
                  fullWidth
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  variant="bordered"
                />
                {errors.email?.message && (
                  <p className="text-[10px] text-red-500 pl-4">
                    {errors.email?.message}
                  </p>
                )}
              </>
            )}
          />

          {/* Mobile Field */}
          <Controller
            control={control}
            name="mobile"
            render={({ field }) => (
              <>
                <Input
                  {...field}
                  fullWidth
                  label="Mobile"
                  placeholder="Enter your mobile number"
                  variant="bordered"
                />
                {errors.mobile?.message && (
                  <p className="text-[10px] text-red-500 pl-4">
                    {errors.mobile?.message}
                  </p>
                )}
              </>
            )}
          />

          {/* Date of Birth Field */}
          <Controller
            control={control}
            name="dob"
            render={({ field }) => (
              <>
                <Input
                  {...field}
                  fullWidth
                  label="Date of Birth"
                  placeholder="Select your date of birth"
                  startContent={<Calendar className="text-default-400" />}
                  type="date"
                  variant="bordered"
                />
                {errors.dob?.message && (
                  <p className="text-[10px] text-red-500 pl-4">
                    {errors.dob?.message}
                  </p>
                )}
              </>
            )}
          />

          {/* Degree Field */}
          <Controller
            control={control}
            defaultValue=""
            name="degree"
            render={({ field }) => (
              <>
                <Select
                  {...field}
                  fullWidth
                  label="Degree"
                  placeholder="Select your degree"
                  variant="bordered"
                >
                  <SelectItem key="diploma" value="diploma">
                    Diploma
                  </SelectItem>
                  <SelectItem key="graduate" value="graduate">
                    Graduate
                  </SelectItem>
                  <SelectItem key="postgraduate" value="postgraduate">
                    Post Graduate
                  </SelectItem>
                  <SelectItem key="other" value="other">
                    Other
                  </SelectItem>
                </Select>
                {errors.degree?.message && (
                  <p className="text-[10px] text-red-500 pl-4">
                    {errors.degree?.message}
                  </p>
                )}
              </>
            )}
          />

          {/* Department Field */}
          <Controller
            control={control}
            defaultValue=""
            name="department"
            render={({ field }) => (
              <>
                <Select
                  {...field}
                  fullWidth
                  label="Department"
                  placeholder="Select your department"
                  variant="bordered"
                >
                  <SelectItem key="foodandbeverage" value="foodandbeverage">
                    Food and Beverage
                  </SelectItem>
                  <SelectItem key="kitchen" value="kitchen">
                    Kitchen
                  </SelectItem>
                  <SelectItem key="housekeeping" value="housekeeping">
                    Housekeeping
                  </SelectItem>
                  <SelectItem key="other" value="other">
                    Other
                  </SelectItem>
                </Select>
                {errors.department?.message && (
                  <p className="text-[10px] text-red-500 pl-4">
                    {errors.department?.message}
                  </p>
                )}
              </>
            )}
          />

          {/* CV Upload */}
          <div className="p-2 ">
            <Input
              fullWidth
              accept=".pdf,.jpeg,.jpg,.png"
              color={uploadedUrl === null ? "default" : "primary"}
              endContent={
                isUploading ? (
                  <Button
                    isIconOnly
                    className="bg-transparent"
                    color={uploadedUrl === null ? "default" : "primary"}
                    isLoading={isUploading}
                  >
                    <Loader />
                  </Button>
                ) : uploadedUrl ? (
                  <div className="">
                    <div className="flex items-center  space-x-2">
                      <Button
                        color="secondary"
                        size="sm"
                        startContent={<Eye />}
                        onClick={() => setIsPdfViewerOpen(true)}
                      >
                        View PDF
                      </Button>
                    </div>
                  </div>
                ) : null
              }
              errorMessage={errors.cv?.message}
              label="Upload CV "
              startContent={<Upload className="text-default-400" />}
              type="file"
              onChange={(e) => handleCvUpload(e.target.files?.[0] || null)}
            />
            {uploadedUrl && (
              <div className="mt-2">
                <p className="text-sm text-green-600 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  File uploaded successfully!
                </p>
              </div>
            )}
            {errors.cv?.message && !uploadedUrl && (
              <p className="text-[10px] text-red-500 pl-4">
                {errors.cv?.message}
              </p>
            )}

            {uploadError && !uploadedUrl && (
              <p className="text-sm text-red-500 mt-2 flex items-center">
                <XCircle className="h-4 w-4 mr-1" />
                {uploadError}
              </p>
            )}
          </div>
          <Controller
            control={control}
            name="terms"
            render={({ field }) => (
              <>
                <div className="flex items-center space-x-2">
                  {/* Using NextUI Checkbox */}
                  <Checkbox
                    isSelected={field.value} // Pass boolean to control the checked state
                    onChange={(selected) => field.onChange(selected)} // Pass the boolean value to react-hook-form
                  >
                    I agree to the{" "}
                    <Link
                      isExternal
                      className="text-blue-600"
                      href="/terms-conditions"
                    >
                      Terms and Conditions
                    </Link>
                  </Checkbox>
                </div>
                {errors.terms?.message && (
                  <p className="text-[10px] text-red-500 pl-4">
                    {errors.terms?.message}
                  </p>
                )}
              </>
            )}
          />

          {/* PDF Viewer Modal */}

          <Modal
            className="h-[70vh] p-2 overflow-auto"
            isOpen={isPdfViewerOpen}
            onClose={() => setIsPdfViewerOpen(false)}
          >
            <ModalContent>
              {uploadedUrl &&
              (uploadedUrl.endsWith(".png") ||
                uploadedUrl.endsWith(".jpeg") ||
                uploadedUrl.endsWith(".jpg")) ? (
                <Image
                  className="w-full -z-10 h-full"
                  src={uploadedUrl || ""}
                  title="PDF Viewer"
                />
              ) : (
                <iframe
                  className="w-full h-[80vh]"
                  src={uploadedUrl || ""}
                  title="File Viewer"
                />
              )}
              <Button
                isIconOnly
                className="absolute top-2 right-2"
                onPress={() => setIsPdfViewerOpen(false)}
              >
                <X />
              </Button>
            </ModalContent>
          </Modal>

          {/* Submit Button */}
          <Button
            fullWidth
            color="primary"
            isDisabled={isSubmitting || isUploading}
            isLoading={isSubmitting}
            startContent={!isSubmitting && <Send />}
            type="submit"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
        {/* Success Modal */}
        <SuccessModal
          error={modalContent.error}
          isOpen={isSuccessModalOpen}
          message={modalContent.message}
          username={modalContent.username}
          onClose={() => setIsSuccessModalOpen(false)}
        />
      </CardBody>
    </Card>
  );
};

export default Apply;
