import { FaStar } from "react-icons/fa6";

export default function ReviewStar({
  size = "text-xs",
  className,
}: {
  size?: string;
  className?: string;
}) {
  return <FaStar className={`${size} ${className} text-yellow`} />;
}
