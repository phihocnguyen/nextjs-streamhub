const StoriesPreview = ({ value } : { value: string }) => {
    return ( 
        <div className="h-full">
            <p className="mb-8">Xem trước</p>
            <div className="h-[88%] rounded-md bg-[#18191A] w-full flex justify-center py-4">
                <div className="w-[300px] rounded-md bg-red-200 flex items-center justify-center">
                    <p className="text-[20px] w-full break-words px-4 text-center text-white font-bold">{value || "Bắt đầu nhập"}</p>
                </div>
            </div>
        </div>
     );
}
 
export default StoriesPreview;