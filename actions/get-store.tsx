import { Store } from "@/types";

// const URL=`${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getStore = async (): Promise<Store> => {
  const store = await fetch(`http://localhost:3000/api/stores`);
  return store.json();
};

export default getStore;
