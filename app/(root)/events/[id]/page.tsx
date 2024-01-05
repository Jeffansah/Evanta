import { getEventById } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import React from "react";

const EventPage = async ({ params: { id } }: SearchParamProps) => {
  const event = await getEventById(id);

  console.log(event);

  return (
    <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
      <div className="grid gid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
        <Image
          src={event.imageUrl}
          alt="event hero img"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center"
        />
      </div>
    </section>
  );
};

export default EventPage;
