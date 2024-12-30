export const handleCvUpload = async (
  file: File | null,
  setUploadError: (error: string | null) => void,
  setUploadedUrl: (url: string | null) => void,
  setIsUploading: (isUploading: boolean) => void,
  setValue: (key: string, value: string) => void,
) => {
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

    const response = await fetch("/api/upload/cv", {
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

// "use client";
// import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import {
//   Button,
//   Input,
//   Card,
//   CardHeader,
//   CardBody,
//   Link,
//   Modal,
//   ModalContent,
//   Image,
// } from "@nextui-org/react";
// import { Upload, CheckCircle, XCircle, Eye, X } from "lucide-react";

// type UploadFormData = {
//   cv: File | null;
// };

// const UploadCV: React.FC = () => {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//     watch,
//   } = useForm<UploadFormData>({
//     defaultValues: { cv: null },
//   });

//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadError, setUploadError] = useState<string | null>(null);
//   const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
//   const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);

//   const uploadCv = async (data: UploadFormData) => {
//     if (!data.cv) {
//       setUploadError("Please select a file to upload.");
//       setUploadedUrl(null);

//       return;
//     }

//     setIsUploading(true);
//     setUploadError(null);

//     try {
//       const formData = new FormData();

//       formData.append("cv", data.cv);

//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_SITE_URL}/api/upload/cv`,
//         {
//           method: "POST",
//           body: formData,
//         },
//       );

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.error || "File upload failed.");
//       }

//       setUploadedUrl(result.url);
//       setUploadError(null);
//     } catch (error: any) {
//       setUploadError(error.message || "An unexpected error occurred.");
//       setUploadedUrl(null);
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const selectedFile = watch("cv");

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] || null;

//     setUploadedUrl(null);

//     if (file) {
//       const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
//       const maxFileSize = 2 * 1024 * 1024;

//       if (!allowedTypes.includes(file.type)) {
//         setUploadError("Only PDF, JPEG, or PNG files are allowed.");
//         setValue("cv", null);

//         return;
//       }

//       if (file.size > maxFileSize) {
//         setUploadError("File size must not exceed 2 MB.");
//         setValue("cv", null);

//         return;
//       }

//       setUploadError(null);
//     } else {
//       setUploadError("Please select a file.");
//     }

//     setValue("cv", file);
//   };

//   return (
//     <Card className="max-w-lg mx-auto mt-8 shadow-lg">
//       <CardHeader className="text-center">
//         <h1 className="text-xl font-semibold">Upload Your CV</h1>
//       </CardHeader>
//       <CardBody>
//         <Controller
//           control={control}
//           name="cv"
//           render={({ field: { onChange } }) => (
//             <Input
//               fullWidth
//               accept=".pdf,.jpeg,.jpg,.png"
//               errorMessage={errors.cv?.message || uploadError}
//               label="Select File"
//               startContent={<Upload className="text-default-400" />}
//               type="file"
//               variant="bordered"
//               onChange={(e) => {
//                 handleFileChange(e);
//                 onChange(e.target.files?.[0]);
//               }}
//             />
//           )}
//         />

//         {uploadError && (
//           <p className="text-sm text-red-500 mt-2 flex items-center">
//             <XCircle className="h-4 w-4 mr-1" />
//             {uploadError}
//           </p>
//         )}

//         {uploadedUrl && (
//           <div className="mt-2">
//             <p className="text-sm text-green-600 flex items-center">
//               <CheckCircle className="h-4 w-4 mr-1" />
//               File uploaded successfully!
//             </p>
//             <div className="flex items-center mt-2 space-x-2">
//               <Button
//                 color="secondary"
//                 startContent={<Eye />}
//                 onClick={() => setIsPdfViewerOpen(true)}
//               >
//                 View PDF
//               </Button>
//               <Link
//                 className="text-blue-600 underline"
//                 href={uploadedUrl}
//                 rel="noopener noreferrer"
//                 target="_blank"
//               >
//                 Download File
//               </Link>
//             </div>
//           </div>
//         )}

//         <Button
//           fullWidth
//           className="mt-4"
//           color="primary"
//           isDisabled={!selectedFile || uploadError !== null || isUploading}
//           isLoading={isUploading}
//           startContent={<Upload className="h-4 w-4" />}
//           onClick={handleSubmit(uploadCv)}
//         >
//           {isUploading ? "Uploading..." : "Upload CV"}
//         </Button>

//         {/* Modal for PDF Viewer */}
//         <Modal
//           aria-labelledby="pdf-viewer"
//           className=" h-[70vh] p-1 overflow-auto"
//           isOpen={isPdfViewerOpen}
//           placement="center"
//           onClose={() => setIsPdfViewerOpen(false)}
//         >
//           <ModalContent>
//             {uploadedUrl &&
//             (uploadedUrl.endsWith(".png") ||
//               uploadedUrl.endsWith(".jpeg") ||
//               uploadedUrl.endsWith(".jpg")) ? (
//               <Image
//                 className="w-full -z-10 h-full"
//                 src={uploadedUrl || ""}
//                 title="PDF Viewer"
//               />
//             ) : (
//               <iframe
//                 className="w-full h-[80vh]"
//                 src={uploadedUrl || ""}
//                 title="File Viewer"
//               />
//             )}
//             <Button
//               isIconOnly
//               className="absolute top-2 right-2"
//               onPress={() => setIsPdfViewerOpen(false)}
//             >
//               <X />
//             </Button>
//           </ModalContent>
//         </Modal>
//       </CardBody>
//     </Card>
//   );
// };

// export default UploadCV;
