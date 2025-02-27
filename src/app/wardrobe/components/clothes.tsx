
import Example from "./example";
import SidebarFilters from "./sidebarfilters";
import Image from "next/image";
import StackedCardsDropdown from "./stackedcards";

export default function Clothes(){
    interface Product {
        id: number;
        name: string;
        href: string;
        imageSrc: string;
        imageAlt: string;
        category: string;
        color: string[];
    }

    const products: Product[] = [ //id, name color, category, favorite, image,
        {
          id: 1,
          name: "Basic Tee",
          href: "#",
          imageSrc: "/Home/Showcase.png",
          imageAlt: "Front of men's Basic Tee in black.",
          category: "Top",
          color: ["Black", "White"]
        },
      ];


      

    return(
        <div>
            <SidebarFilters> 
                <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-white w-full ">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product: Product) => (
                        <div key={product.id} className="group relative box border-grey border-2 p-2 rounded-lg ">
                            <Image
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                width={1000}
                                height={1000}
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                            />
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href={product.href}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {product.name}
                                    </a>
                                </h3>
                                <div className="mt-1 flex justify-between">
                                    {product.color.map((color: string) => (
                                        
                                        <p key={color} className=" mr-1 text-sm text-gray-500">{color}</p>
                                    ))}


                                </div>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{product.category}</p>
                        </div>
                        </div>
                    ))}
                    <StackedCardsDropdown />
                    <Example />

                    </div>
                </div>
              </SidebarFilters>
        </div>
    )

}