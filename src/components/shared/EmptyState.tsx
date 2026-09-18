import React from "react";
import Link from "next/link";
import { PackageOpen } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}

export function EmptyState({
  title,
  description,
  actionText,
  actionHref,
  onAction,
  icon,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 sm:p-12 my-6 bg-white border border-brand-cream-300 rounded-xl shadow-sm">
      <div className="w-16 h-16 rounded-full bg-brand-cream-200 text-brand-saffron flex items-center justify-center mb-4">
        {icon || <PackageOpen className="w-8 h-8" />}
      </div>
      <h3 className="text-lg font-heading font-semibold text-brand-dark mb-1">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-muted-foreground max-w-sm mb-6">
          {description}
        </p>
      )}

      {actionText && (
        <>
          {actionHref ? (
            <Link
              href={actionHref}
              className="bg-brand-saffron text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-saffron-600 transition-colors shadow-sm"
            >
              {actionText}
            </Link>
          ) : (
            <button
              onClick={onAction}
              className="bg-brand-saffron text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-saffron-600 transition-colors shadow-sm"
            >
              {actionText}
            </button>
          )}
        </>
      )}
    </div>
  );
}
