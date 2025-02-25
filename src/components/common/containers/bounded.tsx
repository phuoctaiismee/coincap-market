import {cn} from "@/lib/utils";

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
};

const Bounded = ({
    as: Component = "section",
    className,
    children,
    ...restProps
}: BoundedProps) => {
    const restPropsElement = restProps;
    return (
        <Component {...restPropsElement} className={cn("container mx-auto", className)}>
            {children}
        </Component>
    );
};

export default Bounded;
