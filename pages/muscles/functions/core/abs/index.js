import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';
import {BackUpperBodySVG, EntireBodyMap, FrontUpperBodySVG} from '@/components/BodySVG';
import {scroll} from "@/components/ContentScroll";
import React from "react";

export default function AbsFunction({}) {
    const content = (
        <div className="flex-col">
            <Content
                id={"location"}
                title="Location"
                content={"The abdominal muscles, commonly known as the abs or the six-pack muscles, are located in the anterior (front) part of the abdominal region. They run vertically along the midline of the body, from the ribs down to the pubic bone. These muscles include the rectus abdominis and the transversus abdominis."}
            ></Content>
            <EntireBodyMap highlighted={"abs"}></EntireBodyMap>
            <Content
                title="Rectus Abdominis"
                id={"rectus-abdominis"}
                content={"The abs, specifically referring to the **rectus abdominis** muscle, commonly known as the \"six-pack muscle\", serve important functions related to core stability, spinal support, and trunk flexion. The rectus abdominis is a long, paired muscle with 8 divisions that run vertically along the **anterior** (front) surface of the abdomen. Here are some key aspects of its function and purpose:-.-Firstly, the primary function of the rectus abdominis is to **flex** the trunk, which involves bringing the ribcage closer to the pelvis. This action is essential for movements such as performing sit-ups, crunches, or any activity that requires bending forward. The rectus abdominis contracts to generate the force needed for trunk flexion, contributing to exercises targeting the abdominal region.-.-Secondly, the rectus abdominis muscles provide core **stability** and **support**. They work in conjunction with other muscles of the core, including the obliques, transversus abdominis, and deep spinal stabilizers, to maintain proper alignment and control of the spine. This stability is crucial for maintaining good posture, preventing lower back pain, and providing a solid foundation for movements involving the upper and lower body.-.-Additionally, the appearance of the \"six-pack\" or well-defined rectus abdominis muscles is often associated with fitness and aesthetics. However, it is important to note that visible abs are primarily a result of **low body fat** rather than muscle strength alone. The abs are a small muscle, and have limited volume growth potential. While the rectus abdominis plays a role in defining the abdominal shape, achieving visible abs requires a combination of a healthy dieting, overall body fat reduction, and targeted abdominal exercises.-.-Overall, the rectus abdominis muscles, or the \"six-pack\" muscles, contribute to trunk flexion, provide core stability, and can be associated with a well-defined abdominal appearance. Their function extends beyond aesthetics, as they play a significant role in maintaining spinal support, core strength, and overall body control."}
            ></Content>
        </div>
    )

    return (
        <ContentPage location="Muscles • Functions • Core" title="Rectus Abdominis (Abs)" description={<span>The abs are a group of muscles in the front of the abdomen. They provide core stability, support posture, and enable movements like bending, twisting, and flexing the trunk. Strong abs are crucial for core strength and stability in various physical activities and sports.</span>} content={content} currentTopic={"Muscles-Functions-Core-Abs"}></ContentPage>
    )
}