import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogCard({
  title,
  subtitle,
  des,
  img,
  children,
}: {
  des: string;
  title: string;
  subtitle?: string;
  img: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 shadow-md"
    >
      {/* === Blog Image === */}
      <div className="relative aspect-[16/10]">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>

      {/* === Blog Content === */}
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
        )}
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          {des}
        </p>

        {children && (
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {children}
          </div>
        )}
      </div>
    </motion.article>
  );
}
