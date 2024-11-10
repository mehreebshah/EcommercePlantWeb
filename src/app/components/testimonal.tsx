
function Reviews(){
    return(
        <div className="h-96 max-w-full bg-transparent">
            <div className="font-bold text-2xl mt-10 ml-12">What Customers say about GREEMIND?</div>
            <div className="flex justify-start items-start min-h-screen mt-12 ml-12">
      <div className="bg-blue-100 border border-blue-300 p-6  rounded-lg shadow-lg">
        
        <div className="ml-6">
        <h1 className="text-2xl font-bold mb-4">John Doe</h1>
        <p>⭐⭐⭐⭐</p>
       <p>&quot;Great experience overall! The plants I ordered arrived in perfect condition, and they look exactly as pictured on the website. The only reason I&apos;m giving it 4 stars is because the delivery took a bit longer than expected, but the quality of the plants made up for it. Highly recommend!&quot;</p>
    
        </div>
      </div>

      <div className="flex justify-start items-start min-h-screen ml-12">
      <div className="bg-blue-100 border border-blue-300 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Emily R.</h1>
        <p>⭐⭐⭐⭐⭐</p>
    
      <p>&quot;This shop is a plant lover&apos;s dream! I&apos;ve been buying from them for over a year now, and every plant I&apos;ve purchased has been vibrant and healthy. Their customer service is top-notch too. They helped me pick the perfect low-light plants for my office. Couldn&apos;t be happier!&quot;</p>
      </div>
    </div>
        </div>
        </div>
    )
}

export default Reviews