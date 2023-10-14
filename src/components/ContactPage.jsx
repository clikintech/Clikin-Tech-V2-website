function ContactPage() {
  return (
    <>
      <div>
        <div class="mx-auto max-w-7xl px-4">
          <div class="mx-auto max-w-7xl py-12 md:py-24 ">
            <div class="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
              <img
                alt="Violin"
                src="/images/Frame 17.png"
                className="  sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
              />
              <div className="ml-150px w-full">
                <div class="pl-8 md:px-14">
                  <p class="text-lg text-white md:text-xl">
                    Get In Touch With Us
                  </p>
                  <p class="mt-4 text-2xl font-bold text-white">
                    Our friendly team would{" "}
                    <span className="text-yellow">love</span> to hear from{" "}
                    <span className="text-yellow">you.</span>
                  </p>
                  <form action="" class="mt-8 space-y-4">
                    <div class="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                      <div class="grid w-full  items-center gap-1.5">
                        <input
                          class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-slate-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="first_name"
                          placeholder="First Name"
                        />
                      </div>
                      <div class="grid w-full  items-center gap-1.5">
                        <input
                          class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-slate-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="last_name"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div class="grid w-full  items-center gap-1.5">
                      <input
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-slate-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="grid w-full  items-center gap-1.5">
                      <input
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-slate-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="tel"
                        id="phone_number"
                        placeholder="Phone number"
                      />
                    </div>
                    <div class="grid w-full  items-center gap-1.5">
                      <textarea
                        class="flex h-100px w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-slate-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        id="message"
                        placeholder="Leave a Message"
                        cols="3"
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      class="w-full rounded-md bg-yellow px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
