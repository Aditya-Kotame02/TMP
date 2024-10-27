import React from 'react';
import { Upload, AlertCircle } from 'lucide-react';

interface FileUploadProps {
  isUploading: boolean;
  error: string | null;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ isUploading, error, onFileUpload }) => {
  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Upload Leads</h2>
        <div className="relative">
          <input
            type="file"
            accept=".csv,.xlsx,.json"
            onChange={onFileUpload}
            className="hidden"
            id="file-upload"
            disabled={isUploading}
          />
          <label
            htmlFor="file-upload"
            className={`flex items-center px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition duration-300 ${
              isUploading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <Upload className="mr-2" size={18} />
            {isUploading ? 'Processing...' : 'Upload File'}
          </label>
        </div>
      </div>
      
      {error && (
        <div className="flex items-center text-red-600 mt-2">
          <AlertCircle className="mr-2" size={18} />
          <span>{error}</span>
        </div>
      )}
      
      <p className="text-sm text-gray-600">
        Upload your leads file in CSV, XLSX, or JSON format. Our AI will automatically analyze and prioritize leads.
      </p>
    </div>
  );
};

export default FileUpload;