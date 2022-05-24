import CustomCard from "../Card/ProductCard";
import HeaderCard from "../Molecules/HeaderCard";
import { useSelector } from "react-redux";

export default function EditorChoice() {
  const dataList = useSelector((state) => state.dataList);
  const { loading, error, data } = dataList;

  return (
    <div className="container-header mt-10 md:mt-16 font-poppins">
      <HeaderCard title="Editor's Choice" subtitle="Curated with love" />
      <div className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-20 md:gap-5">
        {loading ? (
          <div></div>
        ) : (
          <>
            {data?.["editor's choice"]?.map((item, index) => {
              return (
                <CustomCard
                  key={index}
                  profile
                  border
                  editor={item?.editor}
                  role={item?.role}
                  image={item?.product?.image}
                  rating={item?.product?.rating}
                  name={item?.product?.name}
                  description={item?.product?.description}
                  alt={item?.product?.name}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
