export default function SectionHeading({ title}){
    return(
        <h2 
            className="
            hero-heading
            font-black
            uppercase
            leading-none
            tracking-tight"
            style={
                {
                    fontSize: "clamp(3rem, 12vw, 160px)",
                }
            }
        >
            {title}
        </h2>
    );
}