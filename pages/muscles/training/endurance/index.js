import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';

export default function TrainingBasics({}) {
    const info = "-.-Additionally, the brain can also control the rate at which the muscle fibers contract. This is important because sometimes you need quick and powerful contractions, while other times you need slower and more controlled movements. Training helps improve this coordination and timing.";

    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Topics */}
            <Content
                id={"basics"}
                title={"Basics"}
                content={"Strength training is a very popular style of training. It primarily focuses on muscle **strength over muscle mass**, whereas [/muscles/training/hypertrophy,hypertrophy] athletes (body builders) would prefer the muscle mass. There are multiple ways to achieve this, which include sets closer to your [/muscles/training/basics/concepts#terminology,1RM] and giving large breaks in between sets. Those training for strength are typically **powerlifters and athletes**. Instead of recruiting mass amounts of muscle fibers, strength athletes aim to optimize neural adaptations and improve **neuromuscular efficiency**.-.-The neuromuscular system consists of **neurons** which transmit signals from the brain. When the brain sends a signal to your muscles, not all muscle fibers contract at the same time or with the same force. The brain can control which muscle fibers to activate depending on the task you're performing.-.-When you start training and getting stronger, your neuromuscular system **adapts** and becomes more efficient. This means that your brain gets better at sending the right messages to the right muscle fibers. It learns how to coordinate and activate more muscle fibers simultaneously, generating more force.-.-So, when strength athletes train to strengthen their neuromuscular system, they're essentially improving the **communication** between their brain, nerves, and muscles. This allows them to recruit more muscle fibers, coordinate their movements better, and generate greater force, leading to significant increases in strength without drastically increasing their muscle mass."}
            ></Content>
            <Content
                id={"reps-sets-rest"}
                title={"Reps, Sets, and Rest"}
                content={"When training for strength, it is important to focus on high intensity low volume workouts. Typically, 3-5 sets of 3-6 reps  above 85% of your [/muscles/training/basics/concepts#terminology,1RM] is recommended. This type of training helps you build maximal strength by challenging your muscles and central nervous system to handle heavy loads. The emphasis is on quality over quantity, with longer rest periods between sets to allow for optimal recovery. Rest times are typically around 2-5 minutes to allow for sufficient **recovery** between sets and ensure the ability to lift heavy with proper form."}
            ></Content>
        </div>
    );

    return (
        <ContentPage location={"Muscles • Training"} title={"Power"} description={<span className={"text-lg"}>Weight lifting, also known as resistance training, is a process involving the lifting, pushing, or pulling weights or resistance devices, resulting in an increase in muscle mass and improvements in overall physical fitness.</span>} currentTopic={"Muscles-Training-Power"} content={content}></ContentPage>
    )
}