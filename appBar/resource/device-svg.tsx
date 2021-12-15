import React from "react";
import clsx from "clsx";
import "./svg.scss";

export default function (props) {

    const { atThis, theme } = props;

    return (
        <svg viewBox="0 0 16.75 16.62451">
            <g id="bfc3d558-1b28-4ee4-af24-2026be618e32" data-name="图层 2">
                <g id="a9ac4f28-4073-4334-8c10-d2c5c0a1daef" data-name="图层 1">
                    <path className={clsx("nemp-" + theme + "-appBar-button-svg", atThis === "device" && theme + "-click-in-button")}
                        d="M1.729,16.62451A1.73065,1.73065,0,0,1,0,14.89551V10.76563a1.73149,1.73149,0,0,1,1.72949-1.7295H6.94287a.26819.26819,0,0,0,.26807-.26806V6.25586a1.23071,1.23071,0,1,1,2.46142,0V8.76807a.26819.26819,0,0,0,.26807.26806H15.021a1.73066,1.73066,0,0,1,1.729,1.729v4.13037a1.73065,1.73065,0,0,1-1.729,1.729Zm0-6.78857a.93046.93046,0,0,0-.9292.9292v4.13037a.93046.93046,0,0,0,.9292.9292H15.021a.93046.93046,0,0,0,.9292-.9292V10.76563a.93066.93066,0,0,0-.92969-.92969H9.3667a.49471.49471,0,0,1-.49414-.49414V6.25586a.43091.43091,0,1,0-.86182,0V9.3418a.49471.49471,0,0,1-.49414.49414Z" />
                    <path className={clsx("nemp-" + theme + "-appBar-button-svg", atThis === "device" && theme + "-click-in-button")}
                        d="M3.57192,14.34033a1.55737,1.55737,0,1,1,1.55713-1.55762A1.55884,1.55884,0,0,1,3.57192,14.34033Zm0-2.48047a.9231.9231,0,1,0,.92334.92285A.924.924,0,0,0,3.57192,11.85986Z" />
                    <path className={clsx("nemp-" + theme + "-appBar-button-svg", atThis === "device" && theme + "-click-in-button")}
                        d="M7.57568,14.34033a1.55737,1.55737,0,1,1,1.55664-1.55762A1.559,1.559,0,0,1,7.57568,14.34033Zm0-2.48047a.9231.9231,0,1,0,.92286.92285A.9241.9241,0,0,0,7.57568,11.85986Z" />
                    <path className={clsx("nemp-" + theme + "-appBar-button-svg", atThis === "device" && theme + "-click-in-button")}
                        d="M14.89453,3.99414a.45077.45077,0,0,1-.36474-.19287l-.1377-.18848-.0166.0166A7.84529,7.84529,0,0,0,8.60742,1.00391l-.11523-.00049a8.50074,8.50074,0,0,0-6.2876,2.80615.4463.4463,0,0,1-.3208.16553h-.001a.48769.48769,0,0,1-.48535-.47852.523.523,0,0,1,.1377-.3833A9.38191,9.38191,0,0,1,8.48486,0l.12647.001a8.73475,8.73475,0,0,1,6.457,2.96923L15.05859,2.98l.14161.14258a.52034.52034,0,0,1,.15234.34668.484.484,0,0,1-.43652.52441Z" />
                    <path className={clsx("nemp-" + theme + "-appBar-button-svg", atThis === "device" && theme + "-click-in-button")}
                        d="M12.25439,5.728a.37822.37822,0,0,1-.30468-.16114l-.12989-.17724-.01953.01758a4.5454,4.5454,0,0,0-3.2915-1.46338H8.50684A5.01362,5.01362,0,0,0,4.79443,5.56738a.37817.37817,0,0,1-.2749.14649h-.001a.41112.41112,0,0,1-.4082-.40332.44285.44285,0,0,1,.11768-.3252,5.67121,5.67121,0,0,1,4.207-1.88818,5.34351,5.34351,0,0,1,4.0498,1.86963.457.457,0,0,1,.15479.31884.43881.43881,0,0,1-.10254.30909.36928.36928,0,0,1-.26367.13281Z" />
                </g>
            </g>
        </svg>
    );
}