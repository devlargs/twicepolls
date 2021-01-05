export type StoreProps = {
  polls: {
    loading: boolean;
    data: Array<{
      question: string;
    }>;
  };
};
