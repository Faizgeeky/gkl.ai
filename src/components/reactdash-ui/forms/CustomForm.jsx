import React from 'react'

function CustomForm() {

    const data = [
        { text: "One", value: 1 },
        { text: "Two", value: 2 },
        { text: "Three", value: 3 },
        { text: "Four", value: 4 },
        { text: "Five", value: 5 },
    ];


  return (
    <>
    {/* Step 1 - 3 Options button */}
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </a>
                    </div>
                </div>
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

          <div>
              <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                  Sign in
              </button>
          </div>
          </div>
    <div>

    </div>

    <div>
              <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                      <img
                          className="mx-auto h-10 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                          alt="Your Company"
                      />
                      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                          Sign in to your account
                      </h2>
                  </div>

                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                      <form className="space-y-6" action="#" method="POST">
                          <div>
                              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                  Email address
                              </label>
                              <div className="mt-2">
                                  <input
                                      id="email"
                                      name="email"
                                      type="email"
                                      autoComplete="email"
                                      required
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                              </div>
                          </div>

                          <div>
                              <div className="flex items-center justify-between">
                                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                      Password
                                  </label>
                                  <div className="text-sm">
                                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                          Forgot password?
                                      </a>
                                  </div>
                              </div>
                              <div className="mt-2">
                                  <input
                                      id="password"
                                      name="password"
                                      type="password"
                                      autoComplete="current-password"
                                      required
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                              </div>
                          </div>

                          <div>
                              <button
                                  type="submit"
                                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >
                                  Sign in
                              </button>
                          </div>
                      </form>

                      <p className="mt-10 text-center text-sm text-gray-500">
                          Not a member?{' '}
                          <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                              Start a 14 day free trial
                          </a>
                      </p>
                  </div>
              </div>
    </div>
    <div>
        <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-teal-500 py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name"/>
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                        Sign Up
                    </button>
                    <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                        Cancel
                    </button>
            </div>
        </form>
    </div>
      </>
  )
}

export default CustomForm
