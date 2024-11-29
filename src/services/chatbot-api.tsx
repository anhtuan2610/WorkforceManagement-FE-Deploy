import { post } from "./axios-config";

type TBaseResponse = {
  code: number;
  message: string;
  data: {
    answer: string;
    timestamp: string;
  };
};

export default function AskGpt({ question }: { question: string }) {
  return post<TBaseResponse>({
    url: "/Chat/AskGPT",
    data: { question },
  });
}
