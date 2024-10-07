export type ApiResponse<T> = {
  data: T[];
  totalItems: number;
};

export type AuthenticatedRequest = Request & {
  user: {
    id: string;
  };
};
