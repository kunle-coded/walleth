import Avatar from "../../ui/Avatar";
import ActivityListItem from "../lists/ActivityListItem";

function ActivityOverview() {
  return (
    <div className="flex-row">
      <div className="flex flex-col pt-4">
        <div className="flex-[1]">
          <div className="flex flex-col">
            <p className="ps-4 pe-4 pt-4 text-secondary-900 text-sm font-medium leading-[1.375rem] md:text-[1rem] md:leading-6">
              Nov 30
            </p>
            <ActivityListItem
              iconUrl="src/assets/images/programming.svg"
              status="confirmed"
            />
            <ActivityListItem
              iconUrl="src/assets/images/programming.svg"
              status="confirmed"
            />
            <ActivityListItem
              iconUrl="src/assets/images/received.svg"
              status="confirmed"
            />
          </div>
        </div>
      </div>

      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center h-[40px] p-0 pl-0 pr-0 mb-4 mt-4 relative bg-transparent text-brand-500 align-middle select-none text-sm leading-[1.375rem] font-semibold md:text-[1rem] md:leading-6 decoration-[none]"
      >
        <Avatar
          imgUrl="src/assets/images/message-question.svg"
          color="text-brand-500"
          margin="me-1"
        />
        Walleth support
      </a>
    </div>
  );
}

export default ActivityOverview;
