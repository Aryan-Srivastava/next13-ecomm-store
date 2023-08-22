import { Billboard } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (): Promise<Billboard> => {
  const billboards = await fetch(`${URL}`);

  return billboards.json();
};

export default getBillboard;
