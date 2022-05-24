import Link from "next/link";
import React from "react";
import Bottom from "../Banner/Bottom";

export default function Footer() {
  return (
    <div className="mt-16 font-poppins">
      <div className="border-t">
        <div className="container-header">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 mt-5">
                <div className="grid grid-cols-3 md:grid-cols-1 gap-3">
                  <Link href="https://femaledaily.com/about">
                    <a className="font-bold text-xs md:text-base text-center">
                      About Us
                    </a>
                  </Link>
                  <Link href="https://femaledaily.com/feedback">
                    <a className="font-bold text-xs md:text-base text-center">
                      Feedback
                    </a>
                  </Link>
                  <Link href="https://editorial.femaledaily.com/contact">
                    <a className="font-bold text-xs md:text-base text-center">
                      Contact
                    </a>
                  </Link>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-1 gap-3">
                  <Link href="https://femaledaily.com/terms-and-conditions">
                    <a className="font-bold text-xs md:text-base text-center">
                      Terms & Conditions
                    </a>
                  </Link>
                  <Link href="https://femaledaily.com/privacy-policy">
                    <a className="font-bold text-xs md:text-base text-center">
                      Privacy Policy
                    </a>
                  </Link>
                  <Link href="https://femaledaily.com/help">
                    <a className="font-bold text-xs md:text-base text-center">
                      Help
                    </a>
                  </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-rows-3 gap-3">
                  <Link href="https://awards.femaledaily.com/">
                    <a className="font-bold text-xs md:text-base text-center">
                      Awards
                    </a>
                  </Link>
                  <Link href="https://femaledaily.com">
                    <a className="font-bold text-xs md:text-base text-center">
                      Newsletter
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1 mt-5">
              <div className="grid grid-cols-1 gap-5">
                <p className="font-bold text-base text-primary-red">
                  Download Our Mobile App
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <Link href="https://itunes.apple.com/id/app/female-daily-beauty-review/id1160742672?l=id&mt=8">
                    <a>
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/btn_appstore.png"
                        className="w-full h-full"
                        alt="appstore"
                      />
                    </a>
                  </Link>
                  <Link href="https://play.google.com/store/apps/details?id=com.fdbr.android&hl=en_GB">
                    <a>
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/btn_playstore.png"
                        className="w-full h-full"
                        alt="playstore"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 mt-7">
            <div className="col-span-3">
              <div className="grid grid-cols-3">
                <Link href="https://femaledaily.com">
                  <a>
                    <img
                      src="https://app.femaledaily.com/wp-content/uploads/2018/07/FD-Logo-Pink.png"
                      className="max-w-[180px] h-[35px] hidden md:block"
                      alt="logo femaledaily"
                    />
                  </a>
                </Link>
              </div>
              <p className="mt-3 text-gray-600 font-roboto text-xs text-center md:text-left md:text-lg">
                Copyright © 2015 - 2022 Female Daily Network ∙ All the rights
                reserved
              </p>
            </div>
            <div className="col-span-1">
              <div className="grid grid-cols-1 h-full items-center">
                <div className="flex justify-center md:justify-start">
                  <Link href="https://www.facebook.com/FemaleDailyNetwork/">
                    <a className="mr-4">
                      <img
                        src="/assets/icon/facebook.png"
                        className="w-8 h-8"
                        alt="facebook"
                      />
                    </a>
                  </Link>
                  <Link href="https://twitter.com/femaledaily">
                    <a className="mr-4">
                      <img
                        src="/assets/icon/twitter.png"
                        className="w-8 h-8"
                        alt="twitter"
                      />
                    </a>
                  </Link>
                  <Link href="https://www.instagram.com/femaledailynetwork/">
                    <a className="mr-4">
                      <img
                        src="/assets/icon/instagram.png"
                        className="w-8 h-8"
                        alt="instagram"
                      />
                    </a>
                  </Link>
                  <Link href="https://www.youtube.com/user/FemaleDailyNetwork">
                    <a>
                      <img
                        src="/assets/icon/youtube.png"
                        className="w-8 h-8"
                        alt="youtube"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Bottom />
      </div>
    </div>
  );
}
