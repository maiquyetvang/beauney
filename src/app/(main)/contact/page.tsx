/* eslint-disable @next/next/no-html-link-for-pages */
'use client';
import { Button } from '@/components/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { HomeIcon } from 'lucide-react';

import { submitToGoogleSheets } from '@/app/actions/submit-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const formSchema = z.object({
  consultationFields: z.array(z.string()).min(1, {
    message: 'Please select at least one consultation field',
  }),
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters',
  }),
  phone: z.string().min(10, {
    message: 'Please enter a valid phone number',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters',
  }),
});

const consultField = [
  { field: 'Skin Whitening', id: 'skinwhitening' },
  { field: 'Botox', id: 'botox' },
  { field: 'Filler', id: 'filler' },
  { field: 'Ultherapy & Thermage Dual Lifting', id: 'ultherapy' },
  { field: 'Skin booster', id: 'skinbooster' },
  { field: 'Hair transplant', id: 'hairtransplant' },
  { field: 'Other ', id: 'other' },
];

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consultationFields: [],
      name: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await submitToGoogleSheets(values);
      console.log(result);
      if (result.success) {
        // toast({
        //   title: 'Form submitted successfully',
        //   description: 'Your information has been sent to our team!',
        // });
        console.log('success');
        form.reset();
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }

      // toast({
      //   title: 'Form submitted successfully',
      //   description: "We'll get back to you soon!",
      // });

      form.reset();
    } catch (error) {
      console.log(error);
      // toast({
      //   title: 'Something went wrong',
      //   description: 'Please try again later',
      //   variant: 'destructive',
      // });
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div>
      <div className="flex w-[100vw] flex-col items-center justify-end bg-[url(/img/about-cover.jpg)] bg-cover bg-center bg-no-repeat px-5 pt-[132px] pb-15 md:px-[5vw] lg:pt-[172px] lg:pb-20">
        <h1 className="mb-5 hidden text-center text-white drop-shadow-lg lg:block">
          Any Questions?
          <br /> Contact Us!
        </h1>
        <h2 className="mb-5 block text-center text-white drop-shadow-lg lg:hidden">
          Any Questions? <br /> Contact Us!
        </h2>
        <h4 className="text-center text-white">
          K Beauty provides safe and professional cosmetic treatments. Feel free
          to contact us for any inquiries or consultations.
        </h4>
      </div>
      <div className="px-[5vw] py-10 lg:py-[5vw]">
        <div className="mb-5 flex items-center justify-start gap-3 text-black/50">
          <a href="/">
            <HomeIcon className="size-5 shrink-0" />
          </a>
          <div className="h-2 w-2 rounded-full bg-black/30"></div>
          <p>Contact</p>
        </div>
        <h2 className="mb-10 lg:mb-20">Contact</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="border-b border-black/10 pb-10">
              <h4 className="mt-10 !font-normal">
                Please select the field you would like to consult.{' '}
              </h4>
              <FormField
                control={form.control}
                name="consultationFields"
                render={() => (
                  <FormItem>
                    <div className="mt-7 flex w-full grid-cols-2 flex-col gap-3 lg:grid">
                      {consultField.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="consultationFields"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-y-0 space-x-3"
                              >
                                <div className="lg:hover:text-primary-500 active:bg-primary-50 has-checked:bg-primary-50 lg:hover:has-checked:bg-primary-50 has-checked:text-primary-500 flex h-14 w-full cursor-pointer items-center justify-between gap-5 rounded-lg bg-[#F7F8FA] px-6 font-medium has-checked:font-medium">
                                  <div className="h-full flex-1">
                                    <FormLabel
                                      htmlFor={item.id}
                                      className="flex h-full !w-full cursor-pointer items-center justify-start text-lg"
                                    >
                                      {item.field}
                                    </FormLabel>
                                  </div>
                                  <FormControl>
                                    <Checkbox
                                      id={item.id}
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              item.id,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== item.id,
                                              ),
                                            );
                                      }}
                                    />
                                  </FormControl>
                                </div>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage className="mt-2" />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <h4 className="mb-5 !font-normal">
                Please enter your information for a quick consultation.
              </h4>
              <div className="flex flex-col items-start justify-start gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          className="border-none bg-[#F7F8FA] text-lg"
                          placeholder="Enter your name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          className="border-none bg-[#F7F8FA] text-lg"
                          placeholder="Phone number"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          className="border-none bg-[#F7F8FA] text-lg"
                          placeholder="Email address"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Textarea
                          {...field}
                          className="resize-none border-none bg-[#F7F8FA] text-lg"
                          placeholder="Enter your message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                variant="primary"
                className="mt-10 w-full lg:w-[400px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
