import React from 'react'
import ProductImages from '@/components/ProductImages'
import CustomizeProducts from '@/components/CustomizeProducts'
import Add from '@/components/Add'

const Slugpage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
    {/* IMG */}
    <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
      <ProductImages  />
    </div>
    {/* TEXTS */}
     <div className="w-full lg:w-1/2 flex flex-col gap-6">
     <h1 className="text-4xl font-medium">name</h1>
     <p className="text-gray-500">description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod sed, fugit laudantium omnis vero asperiores dolores error exercitationem, aliquid animi illo ipsum! Voluptas nostrum labore vitae culpa et voluptatum.</p>
     </div>

     <div className="h-[2px] bg-gray-100" />

     <div className='flex items-center gap-4'>
     <h3 className="text-xl text-gray-500 line-through">
            $original
          </h3>
          <h2 className="font-medium text-2xl">
            $discountedPrice
          </h2>

      <div className="h-[2px] bg-gray-100" />

          <CustomizeProducts/>
          {/* <Add/> */}

          <div className="h-[2px] bg-gray-100" /> 

          <div className="text-sm" >
          <h4 className="font-medium mb-4">itle</h4>
          <p>description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum incidunt quo quaerat deleniti nulla maiores iste hic ut maxime rerum? Vitae incidunt consequatur itaque obcaecati unde, necessitatibus corporis numquam. Odio.
          </p>
        </div>

        <div className="text-sm" >
          <h4 className="font-medium mb-4">itle</h4>
          <p>description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum incidunt quo quaerat deleniti nulla maiores iste hic ut maxime rerum? Vitae incidunt consequatur itaque obcaecati unde, necessitatibus corporis numquam. Odio.
          </p>
        </div>

        <div className="text-sm" >
          <h4 className="font-medium mb-4">itle</h4>
          <p>description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum incidunt quo quaerat deleniti nulla maiores iste hic ut maxime rerum? Vitae incidunt consequatur itaque obcaecati unde, necessitatibus corporis numquam. Odio.
          </p>
        </div>
        </div>
        
    
      {/*
      
     
      
        <Add
          productId={product._id!}
          variantId="00000000-0000-0000-0000-000000000000"
          stockNumber={product.stock?.quantity || 0}
        />
      )}
      <div className="h-[2px] bg-gray-100" />
      {product.additionalInfoSections?.map((section: any) => (
        
      ))}
      <div className="h-[2px] bg-gray-100" /> */}
      {/* REVIEWS */}
      {/* <h1 className="text-2xl">User Reviews</h1>
      <Suspense fallback="Loading...">
        <Reviews productId={product._id!} />
      </Suspense> */}
    
</div>
  )
}

export default Slugpage
