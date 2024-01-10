import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.actions";

const MoreEvents = async () => {
  const events = await getAllEvents({
    query: "",
    category: "",
    page: 1,
    limit: 6,
  });

  return (
    <section
      id="events"
      className="wrapper my-8 flex flex-col gap-8 md:gap-12 md:px-6"
    >
      <h2 className="h2-bold">
        Trusted by <br /> Thousands of Events
      </h2>
      <div className="flex w-full flex-col gap-5 md:flex-row">
        Search Category Filter
      </div>
      <Collection
        data={events?.data}
        emptyTitle="No events found"
        emptyStateSubtext="Come back later for more events."
        collectionType="All_Events"
        limit={6}
        page={1}
        totalPages={2}
      />
    </section>
  );
};

export default MoreEvents;