import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const NavApp = (props) => {
    return (
        <Navbar className={"py-0"} expand={"md"} variant="light" id={'navbar'}>
            <Container className={"py-0"}>
                <Navbar.Brand href="/">
                    <div className={"brand"}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.6023 17.2999V22.7116C15.6023 22.9952 15.307 23.1264 15.0726 23.0163C14.9367 22.953 14.8007 22.8874 14.6648 22.8241C13.7765 22.4069 12.8882 21.9874 12 21.5702C11.9226 21.6053 11.8453 21.6428 11.7679 21.678C10.821 22.1233 9.87183 22.5686 8.92495 23.0139C8.69058 23.1241 8.39526 22.9952 8.39526 22.7093V17.2999C8.46089 17.2999 8.52886 17.2999 8.59448 17.2999C8.63667 17.2999 8.67651 17.2999 8.71636 17.3046C8.72339 17.3046 8.73511 17.3046 8.74683 17.3046C8.74917 17.3046 8.75386 17.3069 8.75854 17.3069C8.81245 17.321 8.86636 17.3303 8.92026 17.3444C8.9437 17.3514 8.9812 17.3585 9.01401 17.3702C9.01401 17.3702 9.02339 17.3772 9.04917 17.3913C9.06558 17.4007 9.08198 17.4077 9.09604 17.4171C9.10308 17.4194 9.10776 17.4241 9.11479 17.4264C9.15229 17.4475 9.18979 17.4686 9.22495 17.4944C9.2437 17.5061 9.26245 17.5202 9.2812 17.5343C9.28354 17.5366 9.28823 17.5413 9.29292 17.5436C9.56714 17.7991 9.82495 18.071 10.0898 18.3335C10.3968 18.6405 10.7015 19.0038 11.1046 19.1889C11.8921 19.5522 12.8109 19.4139 13.4343 18.8022C13.6921 18.5491 13.9476 18.2889 14.2031 18.0335C14.3296 17.9069 14.4562 17.7803 14.5828 17.6538C14.5945 17.6421 14.6039 17.6327 14.6132 17.621C14.6226 17.6116 14.632 17.6022 14.6437 17.5928C14.6648 17.5718 14.7375 17.5132 14.7164 17.5272C14.775 17.4874 14.8359 17.4522 14.8968 17.4171C14.9132 17.4077 14.9296 17.3983 14.9437 17.3913C14.9484 17.3889 14.9531 17.3843 14.9601 17.3819C14.9742 17.3772 14.9906 17.3725 15.0023 17.3678C15.0539 17.3491 15.1078 17.335 15.1617 17.321C15.1804 17.3163 15.1968 17.3139 15.2156 17.3093C15.2296 17.3069 15.239 17.3022 15.246 17.3022C15.2601 17.2975 15.2554 17.2975 15.246 17.2999C15.2812 17.2975 15.3234 17.2999 15.3515 17.2999C15.3726 17.2999 15.3914 17.2999 15.4125 17.2999C15.4734 17.2999 15.532 17.2999 15.5929 17.2999H15.6023Z"
                                fill="#01ACAF"/>
                            <path
                                d="M20.2523 10.0742C20.2523 10.0672 20.2523 10.0625 20.2523 10.0578C20.243 10.0156 20.2359 9.97346 20.2242 9.93127C20.2125 9.88908 20.2008 9.84924 20.1867 9.80705C20.1844 9.79768 20.1797 9.78596 20.175 9.77658C20.1375 9.70627 20.1023 9.63596 20.0578 9.56799C20.0555 9.5633 20.0437 9.54924 20.0344 9.53518L20.032 9.53283C20.025 9.5258 20.0203 9.51877 20.018 9.51643C19.9922 9.48596 19.9641 9.45783 19.9359 9.42736C19.9289 9.42033 19.9242 9.41565 19.9172 9.40861C19.875 9.36643 19.8328 9.32424 19.793 9.2844C19.6383 9.12971 19.4836 8.97502 19.3289 8.82033C19.0359 8.52736 18.6938 8.24143 18.4688 7.88986C18.2625 7.56643 18.1594 7.17736 18.157 6.79533C18.157 6.64768 18.157 6.50236 18.157 6.35471C18.157 5.95627 18.157 5.55783 18.157 5.1594C18.157 5.14533 18.157 5.13361 18.157 5.11955C18.157 5.08205 18.1547 5.04455 18.1523 5.00705C18.1523 5.00705 18.1523 5.00002 18.1523 4.9883C18.1523 4.98361 18.15 4.97893 18.1477 4.9719C18.1289 4.88986 18.1102 4.81018 18.082 4.73049C18.082 4.73049 18.0797 4.72111 18.075 4.71174C18.0727 4.7094 18.0727 4.70471 18.0703 4.70236C18.0516 4.66721 18.0328 4.62971 18.0141 4.59455C17.993 4.5594 17.9719 4.52424 17.9484 4.49143C17.9484 4.49143 17.9414 4.48205 17.9344 4.47033C17.932 4.46799 17.932 4.46565 17.9297 4.46565C17.8781 4.4094 17.8289 4.35315 17.7703 4.30158C17.768 4.29924 17.7562 4.28752 17.7445 4.27815C17.7422 4.2758 17.7375 4.27346 17.7352 4.27111C17.7 4.24768 17.6672 4.22424 17.6344 4.20315C17.6039 4.1844 17.5734 4.16799 17.5406 4.15158C17.5266 4.14455 17.5125 4.13752 17.4984 4.13049C17.4234 4.10705 17.3508 4.07893 17.2734 4.06252C17.2547 4.05783 17.2336 4.05549 17.2148 4.0508C17.1867 4.04846 17.1562 4.04611 17.1281 4.04377C17.0812 4.04143 17.0344 4.04143 16.9852 4.04143H16.4227C16.0734 4.04143 15.7219 4.04611 15.3727 4.04143C14.8875 4.0344 14.4375 3.85627 14.0648 3.5469C13.957 3.45783 13.8609 3.35236 13.7625 3.25393L12.8531 2.34455C12.825 2.31643 12.7992 2.2883 12.7711 2.26252C12.7477 2.23908 12.7219 2.21565 12.6961 2.19221C12.6914 2.18752 12.6727 2.17346 12.6586 2.16174C12.593 2.11955 12.5297 2.07736 12.4594 2.04221C12.4547 2.03986 12.4477 2.03752 12.443 2.03518C12.4313 2.03049 12.4172 2.02346 12.4078 2.01877C12.368 2.00471 12.3258 1.99065 12.2836 1.97893C12.2484 1.96955 12.2109 1.96018 12.1734 1.95315C12.1734 1.95315 12.1617 1.9508 12.1477 1.94611C12.1453 1.94611 12.143 1.94611 12.1406 1.94611C12.0539 1.94143 11.9695 1.93674 11.8852 1.94377C11.8852 1.94377 11.8711 1.94377 11.857 1.94611C11.8547 1.94611 11.8523 1.94611 11.8523 1.94611C11.8102 1.95549 11.768 1.96252 11.7258 1.97424C11.6836 1.98596 11.6438 1.99768 11.6016 2.01174C11.5969 2.01408 11.5852 2.01643 11.5734 2.02111C11.5711 2.02346 11.5664 2.0258 11.5617 2.02815C11.4891 2.06799 11.4164 2.10549 11.3484 2.15236C11.3367 2.1594 11.3297 2.16408 11.3227 2.16877C11.3133 2.17815 11.3039 2.18752 11.2969 2.19221C11.2711 2.21565 11.2453 2.23908 11.2219 2.26252C11.2148 2.26955 11.2102 2.27424 11.2031 2.28127C11.0859 2.39611 10.9711 2.5133 10.8539 2.62815C10.5844 2.89768 10.3148 3.16955 10.0453 3.43674C9.77109 3.70627 9.41953 3.91252 9.04219 3.98986C8.83594 4.03205 8.63203 4.03908 8.42109 4.03908H6.94922C6.93047 4.03908 6.91406 4.03908 6.89531 4.03908C6.85547 4.03908 6.81328 4.04377 6.77344 4.04611C6.76641 4.04846 6.75937 4.04846 6.74766 4.0508C6.66094 4.06721 6.57656 4.09533 6.49219 4.12346C6.4875 4.1258 6.48281 4.12815 6.47812 4.13049C6.44062 4.14924 6.40547 4.16799 6.37031 4.18908C6.33047 4.21252 6.29297 4.2383 6.25547 4.26408C6.25547 4.26408 6.25312 4.26408 6.25312 4.26643C6.25078 4.26877 6.24609 4.27346 6.24141 4.2758C6.18516 4.32736 6.12891 4.37893 6.07969 4.43518C6.075 4.43986 6.05391 4.4633 6.04453 4.47268C6.04687 4.47033 6.05391 4.46565 6.05859 4.45861C6.06797 4.44924 6.075 4.44221 6.07734 4.43986C6.07266 4.4469 6.05625 4.4633 6.04922 4.47268C6.03047 4.50315 6.00937 4.53127 5.99062 4.56174C5.96953 4.5969 5.95078 4.63205 5.93203 4.66955C5.93203 4.66955 5.925 4.68361 5.91797 4.70002C5.88984 4.77736 5.86406 4.85705 5.84766 4.93908C5.84766 4.93908 5.84297 4.96252 5.84062 4.98127C5.83828 5.01643 5.83594 5.04924 5.83359 5.0844C5.82891 5.20627 5.83359 5.32815 5.83359 5.44768V6.71799C5.83359 7.32268 5.62266 7.85705 5.19375 8.28596C4.90078 8.57893 4.60547 8.87424 4.3125 9.16721C4.22578 9.25393 4.14141 9.3383 4.05469 9.42502C4.02656 9.45315 3.99844 9.48361 3.97266 9.51408C3.97266 9.51408 3.97266 9.51643 3.97031 9.51643C3.97266 9.51877 3.95625 9.5469 3.94453 9.55158C3.90234 9.61721 3.8625 9.68283 3.82734 9.75315C3.825 9.76018 3.82031 9.77189 3.81797 9.77658C3.81328 9.78596 3.80859 9.79533 3.80625 9.80236C3.79219 9.84221 3.77812 9.8844 3.76875 9.92658C3.75937 9.96408 3.75 9.99924 3.74531 10.0367C3.74531 10.0438 3.74297 10.0485 3.74297 10.0531C3.74297 10.0578 3.74297 10.0649 3.74063 10.0719C3.73359 10.1563 3.73359 10.243 3.74063 10.3274C3.74063 10.3344 3.74062 10.3414 3.74297 10.3461C3.74297 10.3508 3.74531 10.3555 3.74531 10.3625C3.75234 10.4 3.75937 10.4352 3.76875 10.4727C3.78047 10.5196 3.79453 10.5664 3.81094 10.611C3.81328 10.618 3.81562 10.6227 3.81797 10.6274C3.82031 10.6321 3.825 10.6391 3.82734 10.6485C3.8625 10.7235 3.90938 10.7914 3.95156 10.8617C3.95156 10.8641 3.95391 10.8641 3.95391 10.8641C3.96797 10.8805 3.97969 10.8969 3.99375 10.911C4.0125 10.9321 4.03359 10.9531 4.05234 10.9742C4.05937 10.9813 4.06641 10.9883 4.07578 10.9977C4.12031 11.0422 4.16484 11.0867 4.20703 11.1289C4.51172 11.4336 4.81875 11.7406 5.12344 12.0453C5.27812 12.2 5.42344 12.3571 5.53828 12.5446C5.73281 12.8656 5.82891 13.2383 5.82891 13.611C5.83125 14.0047 5.82891 14.3985 5.82891 14.7899C5.82891 14.9422 5.82891 15.0946 5.82891 15.2446C5.82891 15.268 5.82891 15.2914 5.82891 15.3149C5.82891 15.3453 5.83125 15.3735 5.83359 15.4039C5.83828 15.4203 5.84062 15.4461 5.84297 15.4602C5.85938 15.5422 5.88516 15.6196 5.91328 15.6969C5.92031 15.7086 5.92734 15.7227 5.92734 15.7274C5.94609 15.7625 5.96484 15.8 5.98594 15.8352C6.00703 15.8703 6.03047 15.9031 6.05391 15.936C6.05391 15.936 6.05391 15.9383 6.05625 15.9383C6.06562 15.9477 6.07266 15.9571 6.075 15.9594C6.12422 16.018 6.18047 16.0672 6.23672 16.1188C6.24141 16.1235 6.24609 16.1281 6.25078 16.1305C6.2625 16.1375 6.27187 16.1446 6.27656 16.1469C6.30937 16.1703 6.34453 16.1914 6.37969 16.2125C6.41016 16.2313 6.44297 16.2453 6.47344 16.2641C6.48047 16.2688 6.4875 16.2711 6.49219 16.2735C6.49453 16.2758 6.49922 16.2758 6.50391 16.2781C6.58359 16.3063 6.66328 16.3297 6.74531 16.3461C6.75703 16.3485 6.76406 16.3508 6.77109 16.3508C6.77344 16.3508 6.77578 16.3508 6.77813 16.3508C6.81563 16.3531 6.85313 16.3555 6.89062 16.3578C6.93047 16.3578 6.97031 16.3578 7.01016 16.3578H8.28047C8.31562 16.3578 8.35078 16.3578 8.38594 16.3578C8.475 16.3578 8.56406 16.3555 8.65078 16.3602C8.67891 16.3602 8.70937 16.3625 8.7375 16.3649C8.77969 16.3672 8.82188 16.3719 8.86406 16.3789C8.94141 16.3906 9.01641 16.4047 9.08906 16.4235C9.40547 16.5055 9.69844 16.6602 9.94922 16.8781C10.2211 17.1149 10.4672 17.3891 10.7203 17.6446C10.8609 17.7852 10.9992 17.9235 11.1398 18.0641C11.1633 18.0899 11.1891 18.1133 11.2148 18.1391C11.243 18.1672 11.2734 18.193 11.3039 18.2211C11.318 18.2211 11.3391 18.2446 11.3391 18.2492L11.3414 18.2516C11.3531 18.261 11.3648 18.268 11.3789 18.275C11.7586 18.4156 12.1781 18.4274 12.5625 18.2985C12.5953 18.2774 12.6305 18.2563 12.6633 18.2328C12.6797 18.2164 12.6984 18.2024 12.7148 18.1883C12.7312 18.1719 12.7477 18.1555 12.7641 18.1391C12.7711 18.132 12.7781 18.125 12.7875 18.1156C13.0734 17.8321 13.357 17.5461 13.6406 17.2625C13.7414 17.1617 13.8422 17.061 13.943 16.9602C14.2031 16.7047 14.5336 16.5055 14.8898 16.4211C14.9203 16.4141 14.9508 16.4071 14.9789 16.4024C15.0656 16.386 15.1523 16.3766 15.2414 16.3672C15.3375 16.3602 15.4336 16.3555 15.5297 16.3531C15.5508 16.3531 15.5719 16.3531 15.593 16.3531C15.8062 16.3508 16.0219 16.3602 16.2328 16.3602H17.0414C17.0672 16.3602 17.0953 16.3602 17.1211 16.3578C17.1539 16.3555 17.1891 16.3508 17.2219 16.3485C17.2359 16.3461 17.2523 16.3438 17.2664 16.3391C17.3016 16.3321 17.5125 16.2922 17.5195 16.2617C17.5195 16.2571 17.4328 16.3063 17.4773 16.2781C17.4961 16.2688 17.5148 16.2594 17.5336 16.25C17.5641 16.2336 17.5969 16.2172 17.6273 16.1985C17.6414 16.1891 17.7563 16.1281 17.7539 16.1141C17.7539 16.1117 17.7141 16.1469 17.7094 16.1516C17.7117 16.1492 17.7141 16.1469 17.7188 16.1422C17.7328 16.1281 17.7492 16.1164 17.7656 16.1024C17.8219 16.0508 17.8711 15.9969 17.9227 15.9406C17.932 15.9266 17.9414 15.9149 17.9508 15.9008C17.9695 15.8703 17.9906 15.8422 18.007 15.8094C18.0281 15.7742 18.0445 15.7367 18.0633 15.7016C18.0656 15.6969 18.068 15.6946 18.068 15.6922C18.0703 15.6805 18.075 15.6735 18.075 15.6735C18.1031 15.5938 18.1219 15.5141 18.1406 15.4321C18.143 15.425 18.143 15.4203 18.1453 15.418C18.1453 15.4086 18.1453 15.3992 18.1453 15.3992C18.1477 15.3617 18.15 15.3242 18.15 15.2867C18.1547 14.9375 18.15 14.5883 18.15 14.2391C18.15 13.7774 18.1125 13.2946 18.293 12.8586C18.4102 12.575 18.5742 12.3313 18.7922 12.1133C18.9258 11.9797 19.057 11.8485 19.1906 11.7149C19.4367 11.4688 19.6828 11.2227 19.9289 10.9766C19.957 10.9461 19.9852 10.9156 20.0133 10.8852C20.0133 10.8852 20.0133 10.8828 20.0156 10.8828C20.025 10.8688 20.0438 10.843 20.0484 10.8383C20.093 10.7727 20.1281 10.7024 20.1656 10.6297C20.1703 10.6156 20.1773 10.5992 20.182 10.5828C20.1937 10.5477 20.2055 10.5102 20.2148 10.475C20.2266 10.4328 20.2336 10.3906 20.243 10.3485C20.243 10.3461 20.243 10.3438 20.243 10.3438C20.243 10.3297 20.2453 10.3156 20.2453 10.3156C20.2594 10.236 20.2594 10.1563 20.2523 10.0742ZM15.3844 10.4985C15.382 10.5406 15.3773 10.5852 15.3727 10.6274C15.3703 10.6391 15.3703 10.6508 15.368 10.6625C15.368 10.6625 15.368 10.6649 15.368 10.6696C15.368 10.6672 15.368 10.6672 15.368 10.6649C15.3656 10.6766 15.3586 10.7211 15.3586 10.7258C15.3281 10.9133 15.2836 11.0985 15.2227 11.2789C15.1969 11.3586 15.1664 11.436 15.1383 11.5133C15.1383 11.5156 15.1359 11.518 15.1359 11.5203C15.1453 11.5016 15.1266 11.5438 15.1266 11.5461C15.1266 11.5438 15.1289 11.5367 15.1359 11.5203C15.1359 11.5227 15.1336 11.525 15.1312 11.5274C15.1219 11.5461 15.1148 11.5649 15.1055 11.5836C15.0844 11.6305 15.0609 11.6774 15.0375 11.7242C14.9555 11.8836 14.8617 12.0383 14.7586 12.186C14.7445 12.2071 14.7281 12.2281 14.7141 12.2492C14.7117 12.2516 14.707 12.2586 14.7023 12.2656C14.7023 12.2656 14.7 12.268 14.6977 12.2703L14.6953 12.2727L14.693 12.275C14.693 12.275 14.693 12.275 14.693 12.2727C14.6859 12.2821 14.6766 12.2938 14.6742 12.2961C14.6578 12.3149 14.6414 12.336 14.625 12.3547C14.5664 12.425 14.5055 12.493 14.4398 12.5586C14.3789 12.6219 14.318 12.6805 14.2523 12.7391C14.2172 12.7696 14.1844 12.8 14.1492 12.8281C14.1328 12.8422 14.1188 12.8539 14.1023 12.868C14.0953 12.8727 14.0719 12.8914 14.0602 12.9008C14.0602 12.9008 14.0602 12.9008 14.0578 12.9008C14.0578 12.9008 14.0578 12.9008 14.0555 12.9008C14.0531 12.9008 14.0531 12.9031 14.0531 12.9031C13.9172 13.0039 13.7742 13.0977 13.6242 13.1797C13.5469 13.2219 13.4695 13.2617 13.3898 13.2992C13.3781 13.3039 13.3148 13.3321 13.3102 13.3344C13.268 13.3508 13.2281 13.3672 13.1859 13.3813C13.0078 13.4469 12.825 13.4985 12.6398 13.5336C12.5977 13.5406 12.5555 13.55 12.5133 13.5571C12.5133 13.5571 12.4922 13.5617 12.4734 13.5641H12.4758C12.4734 13.5641 12.4688 13.5641 12.4641 13.5664C12.4594 13.5664 12.457 13.5664 12.4547 13.5688C12.457 13.5688 12.4594 13.5688 12.4617 13.5664C12.45 13.5688 12.4359 13.5711 12.4313 13.5711C12.3281 13.5828 12.225 13.5899 12.1242 13.5946C11.9344 13.6016 11.7422 13.5946 11.5523 13.5711C11.5453 13.5711 11.5242 13.5664 11.5125 13.5664C11.5125 13.5664 11.5125 13.5664 11.5148 13.5664C11.5125 13.5664 11.5125 13.5664 11.5102 13.5664H11.5078C11.5055 13.5664 11.5055 13.5664 11.5055 13.5664C11.4937 13.5641 11.4844 13.5641 11.4727 13.5617C11.4305 13.5547 11.3883 13.5477 11.3461 13.5383C11.2523 13.5196 11.1609 13.4985 11.0695 13.4727C10.9781 13.4469 10.8891 13.4188 10.8 13.386C10.7602 13.3719 10.7227 13.3555 10.6828 13.3414C10.6805 13.3391 10.6781 13.3391 10.6734 13.3391C10.6711 13.3391 10.6688 13.3367 10.6664 13.3367C10.6688 13.3367 10.6687 13.3367 10.6711 13.3391C10.6453 13.3274 10.6195 13.3156 10.5938 13.3039C10.425 13.2266 10.2633 13.1352 10.1086 13.0344C10.0453 12.9922 9.98438 12.95 9.92578 12.9055C9.92109 12.9008 9.85781 12.8516 9.84844 12.8446C9.80859 12.8117 9.77109 12.7789 9.73359 12.7438C9.6 12.6242 9.47578 12.4953 9.36094 12.3571C9.34453 12.3383 9.32812 12.3172 9.31172 12.2985C9.30937 12.2961 9.30469 12.2914 9.3 12.2844C9.3 12.2844 9.29766 12.2797 9.29062 12.2727L9.28828 12.2703C9.29062 12.2727 9.29297 12.2774 9.29531 12.2797C9.28594 12.268 9.2625 12.2352 9.2625 12.2352C9.25078 12.2188 9.23906 12.2024 9.22734 12.186C9.17344 12.111 9.12422 12.0336 9.07734 11.9539C9.03281 11.8789 8.99062 11.8016 8.95078 11.7242C8.92969 11.6821 8.90859 11.6422 8.88984 11.6C8.88047 11.5813 8.87344 11.5625 8.86406 11.5438C8.86172 11.5391 8.85938 11.5344 8.85703 11.5321C8.85938 11.5414 8.86172 11.5438 8.86172 11.5461C8.85938 11.5438 8.84766 11.5156 8.84766 11.5156C8.84766 11.5156 8.85 11.5203 8.85469 11.5274C8.85469 11.525 8.85234 11.5203 8.85 11.5156C8.78438 11.3446 8.72578 11.1711 8.68359 10.993C8.6625 10.9063 8.64375 10.8172 8.62969 10.7281C8.62734 10.7164 8.625 10.7071 8.625 10.6953V10.693V10.6906C8.625 10.6906 8.625 10.6883 8.625 10.686C8.625 10.686 8.625 10.686 8.625 10.6883C8.62266 10.6766 8.62031 10.6578 8.62031 10.6485C8.61562 10.5992 8.61094 10.5524 8.60625 10.5031C8.58984 10.3063 8.58984 10.1094 8.60625 9.91486C8.60859 9.87268 8.61328 9.82815 8.61797 9.78596C8.61797 9.78596 8.62266 9.74846 8.625 9.72971C8.625 9.7344 8.62266 9.73908 8.62266 9.74377C8.62266 9.74143 8.62266 9.73908 8.62266 9.73674C8.62266 9.73205 8.625 9.72736 8.625 9.72502C8.625 9.72502 8.625 9.72736 8.625 9.72971C8.62734 9.72033 8.62969 9.70861 8.62969 9.70393C8.64609 9.60315 8.66484 9.50471 8.68828 9.40861C8.73281 9.23049 8.78906 9.05705 8.85703 8.8883C8.85234 8.89768 8.85 8.90236 8.85 8.90471C8.85234 8.90002 8.87109 8.85549 8.86172 8.88127C8.86406 8.87893 8.86406 8.87424 8.86641 8.8719C8.87578 8.85315 8.88281 8.83439 8.89219 8.81565C8.90859 8.77815 8.92734 8.74065 8.94609 8.70315C8.99063 8.61643 9.0375 8.52971 9.08906 8.44768C9.13359 8.37268 9.18281 8.30002 9.23203 8.22971C9.25078 8.20393 9.26953 8.17815 9.28828 8.15236C9.29297 8.14768 9.29766 8.1383 9.30234 8.13361C9.30234 8.13127 9.30469 8.13127 9.30469 8.12893C9.32344 8.10549 9.34219 8.08205 9.36328 8.05861C9.48047 7.91799 9.60937 7.7844 9.74531 7.66252C9.77578 7.6344 9.80625 7.60861 9.83906 7.58283C9.85547 7.56877 9.86953 7.55705 9.88594 7.54299C9.88594 7.54299 9.90937 7.52424 9.92344 7.51486L9.92109 7.51721L9.92344 7.51486C9.93047 7.51018 9.93281 7.50783 9.93516 7.50783C9.93516 7.50783 9.93516 7.50783 9.93281 7.51018C9.93984 7.50549 9.94688 7.5008 9.94922 7.49846C9.97031 7.4844 9.99141 7.46799 10.0102 7.45393C10.0477 7.42815 10.0852 7.40236 10.125 7.37658C10.2797 7.2758 10.4438 7.18674 10.6102 7.1094C10.6289 7.10002 10.6477 7.09299 10.6664 7.08361H10.6688C10.657 7.0883 10.6547 7.09065 10.6547 7.09065C10.657 7.0883 10.6781 7.07893 10.6805 7.07893C10.6805 7.07893 10.6781 7.08127 10.6734 7.08127C10.7156 7.06486 10.7555 7.04846 10.7977 7.0344C10.8867 7.00158 10.9758 6.97346 11.0672 6.94768C11.1586 6.9219 11.25 6.9008 11.3438 6.88205C11.3859 6.87502 11.4281 6.86565 11.4703 6.85861C11.482 6.85627 11.4937 6.85393 11.5055 6.85393C11.5148 6.85393 11.5617 6.8469 11.5688 6.84455C11.7633 6.82346 11.9602 6.81643 12.157 6.8258C12.2438 6.83049 12.3305 6.83518 12.4148 6.84455C12.4266 6.8469 12.4383 6.8469 12.4477 6.84924C12.4477 6.84924 12.4477 6.84924 12.45 6.84924C12.457 6.85158 12.4852 6.85393 12.4969 6.85627C12.5484 6.86565 12.6023 6.87502 12.6539 6.8844C12.8344 6.9219 13.0102 6.97111 13.1836 7.0344C13.2258 7.0508 13.2656 7.06486 13.3078 7.08127C13.3055 7.07893 13.3031 7.07893 13.3008 7.07893C13.3031 7.07893 13.3242 7.0883 13.3266 7.09065C13.3266 7.09065 13.3219 7.0883 13.3125 7.08361C13.3125 7.08361 13.3125 7.08361 13.3148 7.08361C13.3383 7.09533 13.3617 7.10471 13.3852 7.11643C13.4695 7.15627 13.5516 7.19846 13.6336 7.24299C13.7109 7.28518 13.7836 7.32971 13.8586 7.37893C13.8961 7.40471 13.9359 7.43049 13.9734 7.45627C13.9898 7.46799 14.0062 7.47971 14.0227 7.49143C14.0297 7.49611 14.0602 7.51955 14.0695 7.52658C14.0695 7.52658 14.0719 7.52658 14.0719 7.52893C14.2055 7.6344 14.3297 7.74924 14.4469 7.87111C14.5078 7.9344 14.5641 7.99768 14.6203 8.06565C14.6414 8.08908 14.6602 8.11486 14.6813 8.14065L14.6836 8.14299L14.6859 8.14533V8.14768L14.6883 8.15002C14.693 8.15471 14.6953 8.1594 14.6977 8.16174C14.7164 8.18752 14.7352 8.21096 14.7516 8.23674C14.857 8.38674 14.9531 8.54611 15.0375 8.71252C15.0562 8.75002 15.0727 8.78752 15.0914 8.82502C15.1008 8.84377 15.1078 8.86252 15.1172 8.88127C15.1195 8.88596 15.1195 8.8883 15.1219 8.89065C15.1125 8.86486 15.1313 8.9094 15.1336 8.91408C15.1336 8.91408 15.1313 8.90705 15.1266 8.89768C15.1641 8.98908 15.1969 9.08283 15.2273 9.17658C15.2836 9.35236 15.3258 9.53283 15.3563 9.71565C15.3563 9.72033 15.3586 9.72971 15.3609 9.74143C15.3609 9.73908 15.3609 9.73908 15.3609 9.73674C15.3609 9.73908 15.3609 9.74377 15.3633 9.74846C15.3633 9.7508 15.3633 9.75549 15.3633 9.75549C15.3633 9.7508 15.3609 9.74611 15.3609 9.74143C15.3633 9.76018 15.368 9.79768 15.368 9.79768C15.3727 9.83986 15.3773 9.8844 15.3797 9.92658C15.3867 10.025 15.3914 10.1235 15.3914 10.2219C15.3961 10.3016 15.3914 10.4 15.3844 10.4985Z"
                                fill="#01ACAF"/>
                        </svg>
                        ICPets Holders Hub
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav">
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.333374 0H21.6667V2.66667H0.333374V0ZM5.66671 6.66667H21.6667V9.33333H5.66671V6.66667ZM12.3334 13.3333H21.6667V16H12.3334V13.3333Z"
                            fill="#01ACAF"/>
                    </svg>
                </Navbar.Toggle>
                <Navbar.Collapse id={"navbar-nav"} className={"justify-content-end"}>
                    <Nav className={"py-0"}>
                        <Nav.Link href="https://twitter.com/icpets_nft" target="_blank" className={"menu_item"}>
                            <div className={"item"}>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10.5" cy="10.5" r="10.5" fill="#303345"/>
                                    <path
                                        d="M10.3383 8.72055L10.3625 9.11415L9.95791 9.06595C8.48505 8.8812 7.19833 8.25465 6.10582 7.20237L5.57171 6.68025L5.43414 7.06582C5.1428 7.92531 5.32893 8.833 5.93588 9.44349C6.25958 9.78086 6.18675 9.82906 5.62836 9.62824C5.43414 9.56398 5.26419 9.51578 5.24801 9.53988C5.19136 9.59611 5.38558 10.3271 5.53934 10.6163C5.74975 11.0179 6.17866 11.4115 6.64803 11.6444L7.04457 11.8292L6.5752 11.8372C6.12201 11.8372 6.10582 11.8453 6.15438 12.0139C6.31623 12.5361 6.95555 13.0903 7.6677 13.3313L8.16944 13.5L7.73244 13.757C7.08503 14.1265 6.32433 14.3354 5.56362 14.3514C5.19945 14.3595 4.90002 14.3916 4.90002 14.4157C4.90002 14.496 5.88732 14.9459 6.4619 15.1226C8.18563 15.6447 10.2331 15.4198 11.7707 14.5282C12.8632 13.8936 13.9557 12.6325 14.4655 11.4115C14.7406 10.7608 15.0158 9.57201 15.0158 9.00169C15.0158 8.63219 15.0401 8.58399 15.4933 8.1422C15.7603 7.88515 16.0112 7.60401 16.0597 7.52368C16.1407 7.37106 16.1326 7.37106 15.7199 7.50761C15.032 7.74859 14.9349 7.71646 15.2748 7.35499C15.5256 7.09795 15.8251 6.63205 15.8251 6.4955C15.8251 6.4714 15.7037 6.51156 15.5661 6.58386C15.4204 6.66418 15.0967 6.78467 14.8539 6.85697L14.4169 6.99352L14.0204 6.72845C13.8019 6.58386 13.4944 6.4232 13.3325 6.37501C12.9198 6.26255 12.2886 6.27862 11.9163 6.40714C10.9047 6.76861 10.2654 7.7004 10.3383 8.72055Z"
                                        fill="white"/>
                                </svg>
                                Twitter
                            </div>
                        </Nav.Link>
                        <Nav.Link href="https://discord.gg/d2dhjgqMJy" target="_blank" className={"menu_item"}>
                            <div className={"item"}>
                                <svg className={"discord"} width="21" height="21" viewBox="0 0 21 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10.5" cy="10.5" r="10.5" fill="black"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M10.6177 10.4839C10.6177 10.1294 10.8728 9.83875 11.1959 9.83875C11.5191 9.83875 11.7742 10.1294 11.7742 10.4839C11.7742 10.8385 11.5191 11.1291 11.1959 11.1291C10.8785 11.1291 10.6177 10.8385 10.6177 10.4839ZM8.54834 10.4839C8.54834 10.1294 8.80346 9.83878 9.1266 9.83878C9.44975 9.83878 9.71054 10.1294 9.70487 10.4839C9.70487 10.8385 9.44975 11.1291 9.1266 11.1291C8.80913 11.1291 8.54834 10.8385 8.54834 10.4839Z"
                                          fill="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M6.17143 5H13.8286C14.4743 5 15 5.51935 15 6.1629V16.2903L13.7714 15.2177L13.08 14.5855L12.3486 13.9137L12.6514 14.9581H6.17143C5.52571 14.9581 5 14.4387 5 13.7952V6.1629C5 5.51935 5.52571 5 6.17143 5ZM11.2457 11.9153C11.4172 12.1299 11.6229 12.3726 11.6229 12.3726C12.8857 12.3331 13.3714 11.5145 13.3714 11.5145C13.3714 9.69679 12.5486 8.2234 12.5486 8.2234C11.7257 7.61373 10.9429 7.63066 10.9429 7.63066L10.8629 7.72098C11.8343 8.01453 12.2857 8.43792 12.2857 8.43792C11.6914 8.11615 11.1086 7.95808 10.5657 7.89598C10.1543 7.85082 9.76002 7.86211 9.41144 7.90727C9.38151 7.90727 9.35594 7.91158 9.32712 7.91643C9.32292 7.91713 9.31866 7.91785 9.3143 7.91857C9.1143 7.9355 8.62859 8.00889 8.01716 8.27421C7.80573 8.37018 7.68002 8.43792 7.68002 8.43792C7.68002 8.43792 8.1543 7.99195 9.18287 7.6984L9.12573 7.63066C9.12573 7.63066 8.34287 7.61373 7.52002 8.2234C7.52002 8.2234 6.69716 9.69679 6.69716 11.5145C6.69716 11.5145 7.17716 12.3331 8.44002 12.3726C8.44002 12.3726 8.65144 12.1186 8.82287 11.904C8.09716 11.6895 7.82287 11.2379 7.82287 11.2379C7.82287 11.2379 7.88002 11.2774 7.98287 11.3339C7.98859 11.3395 7.9943 11.3452 8.00573 11.3508C8.0143 11.3565 8.02287 11.3607 8.03144 11.3649C8.04002 11.3692 8.04859 11.3734 8.05716 11.379C8.20002 11.4581 8.34287 11.5202 8.4743 11.571C8.70859 11.6613 8.98859 11.7516 9.3143 11.8137C9.74287 11.8928 10.2457 11.921 10.7943 11.8194C11.0629 11.7742 11.3372 11.6952 11.6229 11.5766C11.8229 11.5032 12.0457 11.396 12.28 11.2436C12.28 11.2436 11.9943 11.7065 11.2457 11.9153Z"
                                          fill="white"/>
                                </svg>
                                Discord
                            </div>
                        </Nav.Link>
                        <Nav.Link href="https://h5aet-waaaa-aaaab-qaamq-cai.raw.ic0.app/p/icpets" target="_blank" className={"menu_item"}>
                            <div className={"item"}>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10.5" cy="10.5" r="10.5" fill="#303345"/>
                                    <path
                                        d="M10.3383 8.72055L10.3625 9.11415L9.95791 9.06595C8.48505 8.8812 7.19833 8.25465 6.10582 7.20237L5.57171 6.68025L5.43414 7.06582C5.1428 7.92531 5.32893 8.833 5.93588 9.44349C6.25958 9.78086 6.18675 9.82906 5.62836 9.62824C5.43414 9.56398 5.26419 9.51578 5.24801 9.53988C5.19136 9.59611 5.38558 10.3271 5.53934 10.6163C5.74975 11.0179 6.17866 11.4115 6.64803 11.6444L7.04457 11.8292L6.5752 11.8372C6.12201 11.8372 6.10582 11.8453 6.15438 12.0139C6.31623 12.5361 6.95555 13.0903 7.6677 13.3313L8.16944 13.5L7.73244 13.757C7.08503 14.1265 6.32433 14.3354 5.56362 14.3514C5.19945 14.3595 4.90002 14.3916 4.90002 14.4157C4.90002 14.496 5.88732 14.9459 6.4619 15.1226C8.18563 15.6447 10.2331 15.4198 11.7707 14.5282C12.8632 13.8936 13.9557 12.6325 14.4655 11.4115C14.7406 10.7608 15.0158 9.57201 15.0158 9.00169C15.0158 8.63219 15.0401 8.58399 15.4933 8.1422C15.7603 7.88515 16.0112 7.60401 16.0597 7.52368C16.1407 7.37106 16.1326 7.37106 15.7199 7.50761C15.032 7.74859 14.9349 7.71646 15.2748 7.35499C15.5256 7.09795 15.8251 6.63205 15.8251 6.4955C15.8251 6.4714 15.7037 6.51156 15.5661 6.58386C15.4204 6.66418 15.0967 6.78467 14.8539 6.85697L14.4169 6.99352L14.0204 6.72845C13.8019 6.58386 13.4944 6.4232 13.3325 6.37501C12.9198 6.26255 12.2886 6.27862 11.9163 6.40714C10.9047 6.76861 10.2654 7.7004 10.3383 8.72055Z"
                                        fill="white"/>
                                </svg>
                                DSCVR
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavApp;