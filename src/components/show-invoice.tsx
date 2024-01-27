import { Modal } from "./modal";
import marcus from "../assets/marcus.jpeg";
import { IORDER } from "../utils/utils";

const ShowInvoiceModal = (props: {
  toggle: () => void;
  show: boolean;
  order: IORDER | null;
}) => {
  const { toggle, show, order } = props;

  return (
    <Modal {...{ toggle, show }}>
      <div className="flex w-[250px] sm:w-[350px] items-center justify-between py-3 border-b">
        <h3 className="text-[#3A3F51] font-semibold text-base">
          Invoice #{order?.id}
        </h3>
        <div
          className={`${
            order?.status === "Paid" ? "bg-[#34CAA51F]" : "bg-[#ED544E1F]"
          }  flex gap-1 px-4 py-[6px] rounded-full w-fit items-center justify-center`}
        >
          <h3
            className={`text-sm font-medium ${
              order?.status === "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]"
            }`}
          >
            {order?.status}
          </h3>
        </div>
      </div>

      <div className="flex w-[250px] sm:w-[350px] py-5 items-center justify-between">
        <div className="flex gap-3 items-center">
          <img
            src={order?.image || marcus}
            alt=""
            className="w-[40px] h-[40px] rounded-full justify-center object-cover bg-cover bg-center"
          />

          <div className="flex gap-[1px] flex-col items-start justify-center inter">
            <h3 className="text-base line-clamp-1 break-all font-medium lg:text-base text-[#26282C] dark:text-[#D3D5D9]">
              {order?.name}
            </h3>
            <h4 className="text-xs lg:text-sm text-[#787486] dark:text-[#787486]">
              {order?.email}
            </h4>
          </div>
        </div>

        <div className="flex gap-[3px] flex-col items-end justify-center inter">
          <p className="text-[#0D062D] dark:text-[#D9D2F9] text-lg font-semibold">
            {order?.amount}
          </p>
          <p className="font-medium w-fit text-[10px] text-[#737373]">
            {order?.date}
          </p>
        </div>
      </div>

      <div className="flex items-center pt-1 pb-4 justify-between w-[250px] sm:w-[350px] gap-4">
      {order?.status === "Refund" && (
          <div className="border bg-[#0D062D] hover:bg-[#140944] cursor-pointer border-[#0D062D]/40 dark:border-[#262626] flex items-center justify-center w-[50%] px-[15px] py-[10px] gap-[6px] rounded-[14px]">
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path className="stroke-white dark:stroke-[#292D32] stroke-1.5 stroke-linecap-round stroke-linejoin-round" d="M9 14.3501V17.0001L11 15.0001" />
            <path className="stroke-white dark:stroke-[#292D32] stroke-1.5 stroke-linecap-round stroke-linejoin-round" d="M9 11V12" />
            <path className="stroke-white dark:stroke-[#292D32] stroke-1.5 stroke-linecap-round stroke-linejoin-round" d="M9 17L7 15" />
            <path className="stroke-white dark:stroke-[#292D32] stroke-1.5 stroke-linecap-round stroke-linejoin-round" d="M2 9C2 4 4 2 9 2H14" />
            <path className="stroke-white dark:stroke-[#292D32] stroke-1.5 stroke-linecap-round stroke-linejoin-round" d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V12.98" />
            <path className="stroke-white dark:stroke-[#292D32] stroke-1.5 stroke-linecap-round stroke-linejoin-round" d="M18 10C15 10 14 9 14 6V2L22 10" />
            </svg>

            <h4 className="text-white text-sm font-medium dark:text-[#D9D2F9]">
              Resolve
            </h4>
          </div>
        )}

        <div
          className={`border hover:bg-[#0D062D]/10 cursor-pointer border-[#0D062D]/40 dark:border-[#262626]  flex items-center justify-center ${
            order?.status === "Refund" ? "w-[50%]" : "w-full"
          } px-[15px] py-[10px] gap-[6px] rounded-[14px]`}
        >
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M7.25 7H16.75V5C16.75 3 16 2 13.75 2H10.25C8 2 7.25 3 7.25 5V7Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 15V19C16 21 15 22 13 22H11C9 22 8 21 8 19V15H16Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 10V15C21 17 20 18 18 18H16V15H8V18H6C4 18 3 17 3 15V10C3 8 4 7 6 7H18C20 7 21 8 21 10Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 15H15.79H7" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 11H10" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          <h4 className="text-[#0D062D] text-sm font-medium dark:text-[#D9D2F9]">
            Print
          </h4>
        </div>
        
      </div>
    </Modal>
  );
};

export default ShowInvoiceModal;
