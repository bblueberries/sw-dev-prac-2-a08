import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import Link from "next/link";

type CardProps = {
  vid: string;
  venueName: string;
  imgSrc: string;
  rating?: number;
  onRate?: (value: number) => void;
};

export default function Card({
  vid,
  venueName,
  imgSrc,
  rating,
  onRate,
}: CardProps) {
  return (
    <Link href={`/venue/${vid}`} className="block">
      <InteractiveCard data-testid={venueName}>
        {/* Image */}
        <Image
          src={imgSrc}
          alt={venueName}
          width={640}
          height={384}
          className="w-full object-cover"
        />

        {/* Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{venueName}</h2>

          {/* Star rating row */}
          <div
            className="flex items-center space-x-1 mt-2"
            data-testid={`${venueName} Rating`}
            role="radiogroup"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <label
                key={star}
                className="cursor-pointer"
                // ⛔ stop navigation when clicking stars
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="radio"
                  name={`${venueName}-rating`}
                  value={star}
                  role="radio"
                  aria-label={`${star} Stars`}
                  checked={rating === star}
                  onChange={() => onRate?.(star)}
                  className="hidden"
                />
                <span
                  className={`text-2xl ${
                    rating && rating >= star
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              </label>
            ))}
          </div>
        </div>
      </InteractiveCard>
    </Link>
  );
}
