export default function Container({ children, className=" "}){
    return(
        <div className={`w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 ${className}`}>
            {children}
        </div>
    );
}