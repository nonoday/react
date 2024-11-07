
import Button from '@/components/common/button/Button';

export default function Intro() {


  return (
    <>

      <div className='flex justify-between items-center'>
        <div className="flex gap-2">
          
          <Button disabled>
            가이드
          </Button>
          <Button variant="tertiary">
            추천키워드
          </Button>
          <Button variant="primary">
            검색내역
          </Button>
          <Button variant="secondary">
            필터
          </Button>
          <Button variant="quaternary">
            핫 비디오
          </Button>
        </div>
        <div className="flex gap-2">
          
          <Button disabled>
            가이드
          </Button>
          <Button variant="tertiary">
            추천키워드
          </Button>
          <Button variant="primary">
            검색내역
          </Button>
          <Button variant="secondary">
            필터
          </Button>
        </div>
      </div>





      <div className="mb-4">
        <div className="px-[30px] py-[20px] rounded-md bg-light-200 dark:bg-dark-800 min-h-[150px]">
          <div className="flex justify-between h-full">
            <div className="min-w-[200px]">
              <div className="flex flex-col justify-between h-full">
              <button className="inline-flex items-center text-left self-start">
                <img src="" height="40" width="40" className="rounded-full inline-block"/>
                  <span className="ml-2.5 dark:text-white">간식남</span>
              </button>
              <div>
                <div className="inline-flex items-center p-1.5 border border-dark-200 dark:border-dark-800 rounded-md bg-white dark:bg-dark-850">
                  <span className="dark:text-dark-200 text-2xs px-5 border-r border-r-dark-600">채널 연락처</span>
                  <div className="px-5">
                    <ul className="flex items-center space-x-2">
                      <li><a href="" target="_blank">
                        <img src="" alt="go to youtube" className="w-4 h-4" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 ml-8 grid grid-cols-4 gap-1.5 max-w-[1200px]">
            <div className="min-w-[180px] h-[50px] px-8 flex justify-between items-center bg-white dark:bg-dark-850 rounded-md">
              <span className="text-2xs">구독자</span>
              <span className="text-xs font-medium">3,140명</span>
            </div>
            <div className="min-w-[180px] h-[50px] px-8 flex justify-between items-center bg-white dark:bg-dark-850 rounded-md">
              <span className="text-2xs">총 영상수</span>
              <span className="text-xs font-medium">6개</span>
            </div>
            <div className="min-w-[180px] h-[50px] px-8 flex justify-between items-center bg-white dark:bg-dark-850 rounded-md">
              <span className="text-2xs">채널 개설</span>
              <span className="text-xs font-medium">
                <div className="text-right font-medium">
                  <div className="text-mi text-dark-500">2022.11.02</div>
                  <div className="text-xs">626일 경과</div>
                </div>
              </span>
            </div>
            <div className="min-w-[180px] h-[50px] px-8 flex justify-between items-center bg-white dark:bg-dark-850 rounded-md">
              <span className="text-2xs">누적 조회수</span>
              <span className="text-xs font-medium">1.7만회</span>
            </div>
            <div className="min-w-[180px] h-[50px] px-8 flex justify-between items-center bg-white dark:bg-dark-850 rounded-md">
              <span className="text-2xs">평균 좋아요</span>
              <span className="text-xs font-medium">25개</span>
            </div>
            <div className="min-w-[180px] h-[50px] px-8 flex justify-between items-center bg-white dark:bg-dark-850 rounded-md">
              <span className="text-2xs">평균 조회수</span>
              <span className="text-xs font-medium">2,836회</span>
            </div>
            <div className="min-w-[180px] h-[50px] px-8 flex justify-between items-center bg-white dark:bg-dark-850 rounded-md">
              <span className="text-2xs">구독전환</span>
              <span className="text-center">
                <div className="leading-4 text-xs leading-3 -mt-2 font-black text-[#008D1F] dark:text-[#00FFF0]" data-tooltip-id="tooltip" data-tooltip-content="Viewtrap이 'Great'이라고 판단한 영상입니다.">
                  <div>Great</div>
                </div>
              </span>
            </div>
            <div className="min-w-[180px] h-[50px] px-8 flex justify-between items-center bg-white dark:bg-dark-850 rounded-md">
              <span className="text-2xs">영상성과</span>
              <span className="text-center">
                <div className="leading-4 text-xs leading-3 -mt-2 font-black text-[#B7B7B7] dark:text-[#D0D0D0]" data-tooltip-id="tooltip" 
                data-tooltip-content="Viewtrap이 'Normal'이라고 판단한 영상입니다.">
                  <div>Normal</div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>


    </>
  )
}
