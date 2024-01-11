import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../redux/slices/productSlice";
import { addtoCart } from "../redux/slices/cartSlice";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  console.log(products);

  const getDate = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch(addProducts(data));
  };

  useEffect(() => {
    getDate(); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return <div className="max-w-screen-2xl mx-auto mt-40">

     <div className="flex flex-wrap gap-y-5 gap-x-[5px] ">
      {
        products.map((item)=>(
          <div key={item.id} className="mb-10 w-64 h-96 hover:scale-110 duration-500 ease-in-out pb-5 pt-5 text-center mx-auto shadow-2xl rounded-xl" >
           
            <img className="w-36 h-36    mx-auto" src={item.image} alt="" />
           
            <div className="px-5 space-x-2 ">
              <h3 className="font-bold mx-auto leading-2 py-1">{item.title.slice(0,20)}</h3>
              <div className="flex justify-between items-center">
              <span className="text-sm uppercase text-gray-600 font-semibold">{item.category}</span>
              <h3 className="font-bold text-yellow-600"> ${item.price}</h3>
              </div>
              <p className="font-semibold text-gray-700">{item.description.slice(0,40)}</p>
              <button onClick={()=>dispatch(addtoCart({
                id:item.id,
                image:item.image,
                title:item.title,
                price:item.price,
                description:item.description,
                category:item.category,
                qty:1,
              }))} className="bg-yellow-600 hover:bg-gray-500 hover:text-white w-full mt-2 text-gray-900 font-mono font-semibold  py-1 px-2 rounded-xl">Add to cart</button>

            </div>

          </div>
        ))
      }
     </div>


  </div>;
};

export default Home;
