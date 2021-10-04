import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import FormMentor from "../Form-mentor";
function Become() {
    return (
      <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Become a coding mentor, get in touch</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
            Leave your details and we will connect you with talented students
            </p>
            <dl className="mt-8 text-base text-gray-500">


              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">hello@onlinehikes.com</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              Looking for inspiration?{' '}
              <a href="/mentors" className="font-medium text-gray-700 underline">
                View current mentors
              </a>
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
              <FormMentor />
          </div>
        </div>
      </div>
    </div>
    );
  }

  export default Become;
