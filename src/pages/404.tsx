import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | Military Asset Management</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h1 className="text-9xl font-extrabold text-military-navy-dark">404</h1>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Page not found</h2>
            <p className="mt-2 text-sm text-gray-600">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/" className="btn btn-primary">
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}