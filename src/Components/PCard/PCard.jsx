import React from 'react'
import "./PCard.css"
import { ArrowRight, Check2, QuestionCircle, X } from 'react-bootstrap-icons'
import { Button } from 'react-bootstrap'

function PCard(props) {
    return (
        <div className='col-12 col-lg-4 p-2'>
            <div className='border rounded-4 p-3 d-flex flex-column justify-content-center align-items-center'>
                <div className={`w-100 rounded-4 p-2 d-flex justify-content-between align-items-center  mb-3 ${props.isActive ? "P-bg" : "bg-main-blue"}`}>
                    <div className='d-flex flex-column gap-1'>
                        <p className='m-0 text-white fw-bold fs-5'>Regular Plans</p>
                        <p className='m-0 text-white'><span className='fw-bold fs-3'>%49</span><span>/Month</span></p>
                    </div>
                    <div>
                        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_7465_421)">
                                <path d="M60.522 14.0915C60.0708 14.0915 59.6271 14.1094 59.1857 14.1451C57.8937 6.14392 50.3325 0 41.1946 0C31.4071 0 23.4267 7.04908 23.0246 15.8817C20.791 14.744 18.2191 14.0915 15.478 14.0915C6.93116 14.0915 0 20.4075 0 28.2007C0 35.9918 6.9287 42.3101 15.478 42.3101H60.522C69.0688 42.3101 76 35.9941 76 28.2007C76 20.4075 69.0713 14.0915 60.522 14.0915ZM49.0158 8.30737C48.724 8.79682 48.0498 8.97785 47.5129 8.71189C47.486 8.69848 37.7033 3.6944 32.28 13.2489C32.0005 13.745 31.3311 13.9395 30.7869 13.6847C30.2426 13.4299 30.0294 12.8198 30.3088 12.3236C36.7863 0.911868 48.5377 6.92393 48.572 6.93957C49.109 7.20553 49.3076 7.81792 49.0158 8.30737ZM39.8535 44.335H36.149V65.8309C36.7374 65.6789 37.3601 65.5984 38.0025 65.5984C38.6448 65.5984 39.2651 65.6789 39.856 65.8309V44.335H39.8535ZM38 67.6233C35.4625 67.6233 33.4054 69.4985 33.4054 71.8117C33.4054 74.1248 35.4625 76 38 76C40.5375 76 42.5946 74.1248 42.5946 71.8117C42.5946 69.4985 40.54 67.6233 38 67.6233ZM20.8351 65.974C18.577 65.974 16.7333 67.6524 16.7333 69.713C16.7333 71.7737 18.577 73.4521 20.8351 73.4521C23.0932 73.4521 24.9369 71.7714 24.9369 69.713C24.9369 67.6524 23.0932 65.974 20.8351 65.974ZM28.5779 60.6301C28.5779 61.0503 28.4798 61.4503 28.2983 61.8035C28.0434 62.2975 27.8007 62.4785 27.4059 62.8137L24.5128 65.0218C25.5303 65.6856 26.3222 66.6154 26.766 67.7016L29.7816 65.4018C30.5245 64.899 31.2527 63.9893 31.6449 63.2294C32.0618 62.4159 32.2874 61.5308 32.2874 60.6301V44.335H28.5827V60.6301H28.5779ZM55.1672 65.974C52.9068 65.974 51.0654 67.6524 51.0654 69.713C51.0654 71.7737 52.9068 73.4521 55.1672 73.4521C57.4278 73.4521 59.2692 71.7714 59.2692 69.713C59.2692 67.6524 57.4253 65.974 55.1672 65.974ZM48.5966 62.8137C48.2043 62.4785 47.9591 62.2975 47.7042 61.8035C47.5227 61.4482 47.4246 61.0503 47.4246 60.6301V44.335H43.72V60.6301C43.72 61.5308 43.9431 62.4159 44.3624 63.2294C44.7522 63.9871 45.4828 64.899 46.2257 65.4018L49.2414 67.7016C49.6851 66.6154 50.477 65.6856 51.4945 65.0218L48.5966 62.8137ZM13.4112 54.6046C11.2536 54.6046 9.49326 56.2093 9.49326 58.1761C9.49326 60.1429 11.2536 61.7477 13.4112 61.7477C15.5687 61.7477 17.3292 60.1429 17.3292 58.1761C17.3292 56.2093 15.5687 54.6046 13.4112 54.6046ZM19.2023 56.3055C20.97 55.0361 23.2795 53.3262 24.0691 51.7886C24.4859 50.9773 24.7114 50.0901 24.7114 49.1915V44.335H21.0068V49.1915C21.0068 49.6117 20.9088 50.0096 20.7272 50.3649C20.3179 51.1606 18.4373 52.5776 16.9859 53.6213C17.9961 54.2829 18.7781 55.2171 19.2023 56.3055ZM62.5888 54.6046C60.4313 54.6046 58.6708 56.2093 58.6708 58.1761C58.6708 60.1429 60.4313 61.7477 62.5888 61.7477C64.7463 61.7477 66.5067 60.1429 66.5067 58.1761C66.5067 56.2093 64.7463 54.6046 62.5888 54.6046ZM51.2911 44.335V49.1915C51.2911 50.0923 51.5141 50.9773 51.9334 51.7886C52.3232 52.5486 53.0538 53.4581 53.7967 53.9609L56.8173 56.2652C57.2512 55.1746 58.0457 54.2426 59.0706 53.5877L56.1701 51.3752C55.7581 51.0221 55.5326 50.8589 55.2776 50.3649C55.0962 50.0096 54.9981 49.6117 54.9981 49.1915V44.335H51.2911Z" fill="url(#paint0_linear_7465_421)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_7465_421" x1="9.77313" y1="13.4484" x2="61.0166" y2="69.6628" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#A6CDFF" />
                                    <stop offset="1" stop-color="#4496FF" />
                                </linearGradient>
                                <clipPath id="clip0_7465_421">
                                    <rect width="76" height="76" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className='w-100'>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <span><Check2 className='main-blue' /> 100 GB SSD Storage</span>
                        <QuestionCircle />
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <span><Check2 className='main-blue' /> Weakly Backups</span>
                        <QuestionCircle />
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <span><Check2 className='main-blue' /> Unlimited Free SSL</span>
                        <QuestionCircle />
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <span><Check2 className='main-blue' /> 24/7 System Monitoring</span>
                        <QuestionCircle />
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <span><Check2 className='main-blue' /> Free Domain (%9.99 Value)</span>
                        <QuestionCircle />
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <span><X className='text-danger' /> Frame 164236</span>
                        <QuestionCircle />
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-2 '>
                        <span><X className='text-danger' /> 20+ Payment Methods</span>
                        <QuestionCircle />
                    </div>
                </div>
                <Button className={`rounded-pill bg-transparent  px-3 w-100 ${props.isActive ? "P-bg" : "main-blue"}`}
                >Read More <ArrowRight /> </Button>
            </div>
        </div>
    )
}
export default PCard