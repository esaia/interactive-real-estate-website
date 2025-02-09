<script setup lang="ts">
import Location from "~/components/icons/Location.vue";
import Message from "~/components/icons/Message.vue";
import Input from "~/components/ui/Input.vue";
</script>

<template>
  <section class="relative py-20 md:py-[120px]">
    <div
      class="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#ffe9e9b2] lg:h-[45%] xl:h-1/2"
    ></div>
    <div class="container-fluid">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="w-full px-4 lg:w-7/12 xl:w-8/12">
          <div class="ud-contact-content-wrapper">
            <div class="ud-contact-title mb-12 lg:mb-[150px]">
              <span class="text-dark mb-6 block text-base font-medium">
                CONTACT US
              </span>
              <h2
                class="text-dark max-w-[260px] text-[35px] font-semibold leading-[1.14]"
              >
                Let's talk about your problem.
              </h2>
            </div>
            <div class="mb-12 flex flex-wrap justify-between lg:mb-0">
              <div class="mb-8 flex w-[330px] max-w-full">
                <div class="mr-6 text-[32px] text-primary">
                  <Message />
                </div>
                <div>
                  <h5 class="text-dark mb-[18px] text-lg font-semibold">
                    How Can We Help?
                  </h5>
                  <a
                    href="mailto:interactiverealestateplugin@gmail.com"
                    class="gradient-text font-medium"
                  >
                    interactiverealestateplugin@gmail.com
                  </a>
                </div>
              </div>

              <div class="mb-8 flex w-[330px] max-w-full">
                <div class="mr-6 text-[32px] text-primary">
                  <Location />
                </div>
                <div>
                  <h5 class="text-dark mb-[18px] text-lg font-semibold">
                    Our Location
                  </h5>
                  <p class="text-body-color text-base">Tbilisi, Georgia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 lg:w-5/12 xl:w-4/12">
          <div
            class="shadow-testimonial rounded-lg bg-white px-8 py-10 sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
            data-wow-delay=".2s
              "
          >
            <h3
              class="text-dark mb-8 text-2xl font-semibold md:text-[28px] md:leading-[1.42]"
            >
              Send us a Message
            </h3>
            <form
              action="https://formspree.io/f/mbldkqnj"
              method="POST"
              class="flex flex-col gap-4"
            >
              <Input
                label="Full Name*"
                placeholder="Adam Gelius"
                name="name"
                required
              />

              <Input
                type="email"
                label="Email*"
                placeholder="example@yourmail.com"
                name="email"
                required
              />
              <Input
                label="Phone"
                placeholder="+885 1254 5211 552"
                name="phone"
              />

              <div class="mb-[30px]">
                <label for="message" class="text-body-color mb-4 block text-sm">
                  Message*
                </label>
                <textarea
                  name="message"
                  rows="1"
                  placeholder="type your message here"
                  class="text-body-color placeholder:text-body-color/60 w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 focus:border-primary focus:outline-none"
                  required
                ></textarea>
              </div>
              <BaseButton title="Send" btn-type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
