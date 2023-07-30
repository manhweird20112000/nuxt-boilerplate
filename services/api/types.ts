export interface RequestType {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    isQuery?: boolean;
    data?: Record<string, any>;
    isDownloadFile?: boolean;
    isUploadFile?: boolean;
}
