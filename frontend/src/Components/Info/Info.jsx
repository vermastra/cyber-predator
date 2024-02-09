import React from "react";
import "./Styles.css";
import img1 from "../../Images/Img1.jpg"
function Info() {
  return (
    <div className="Info_main">
      {/* <img src="https://savvycyberkids.org/wp-content/uploads/2021/03/blog-how-can-cyberbullying-affect-me.jpg" alt="cyber_image"></img> */}
      <h1>INFORMATION</h1>
      <div className="art1">
        <div className="info_head">What is Cyber Bullying?</div>
        <div className="info_cont">
          Cyberbullying is bullying that takes place over digital devices like
          cell phones, computers, and tablets. Cyberbullying can occur through
          SMS, Text, and apps, or online in social media, forums, or gaming
          where people can view, participate in, or share content. Cyberbullying
          includes sending, posting, or sharing negative, harmful, false, or
          mean content about someone else. It can include sharing personal or
          private information about someone else causing embarrassment or
          humiliation. Some cyberbullying crosses the line into unlawful or
          criminal behavior.
        </div>
        <div className="sub_head">
          The most common places where cyberbullying occurs are:
        </div> 
        <div className="info_subPoints">
        <div className="sub_points">
          <div className="pp">
            -- Social Media, such as Facebook, Instagram, Snapchat, and Tik Tok
          </div>
          <div className="pp">
           -- Text messaging and messaging apps on mobile or tablet devices
          </div>
          <div className="pp">
            -- Instant messaging, direct messaging, and online chatting over the
            internet
          </div>
          <div className="pp">
            -- Online forums, chat rooms, and message boards, such as Reddit
          </div>
          <div className="pp">-- Online Gaming Communities</div>
        </div>
        <div className="info_img">
          <img src={img1}></img>
        </div>


        </div>
      </div>
      <div className="art2">
        <div className="info_head">Special Concerns:</div>
        <div className="info_cont">
          With the prevalence of social media and digital forums, comments,
          photos, posts, and content shared by individuals can often be viewed
          by strangers as well as acquaintances. The content an individual
          shares online – both their personal content as well as any negative,
          mean, or hurtful content – creates a kind of permanent public record
          of their views, activities, and behavior. This public record can be
          thought of as an online reputation, which may be accessible to
          schools, employers, colleges, clubs, and others who may be researching
          an individual now or in the future. Cyberbullying can harm the online
          reputations of everyone involved – not just the person being bullied,
          but those doing the bullying or participating in it. Cyberbullying has
          unique concerns in that it can be:
          <br />
          <div className="sub">
           <b> Persistent </b> – Digital devices offer an ability to immediately and
            continuously communicate 24 hours a day, so it can be difficult for
            children experiencing cyberbullying to find relief.
          </div>
          <div className="sub">
            <b>Permanent </b>– Most information communicated electronically is
            permanent and public, if not reported and removed. A negative online
            reputation, including for those who bully, can impact college
            admissions, employment, and other areas of life.
          </div>
          <div className="sub">
           <b> Hard to Notice </b> – Because teachers and parents may not overhear or
            see cyberbullying taking place, it is harder to recognize.
          </div>
        </div>
      </div>
      <div className="art-type">
        <div className="info_head">Types of Cyberbullying:</div>
        <div className="info_cont">
          <div className="sub">There are a lot of ways by which a victim is target. Some of them are worth mentioning:</div>
          <div className="sub_points">
            <div className="pp"> <b>Exclusion </b>: The act of leaving out someone deliberately. But it can also be used online to target and bully a victim. </div>
            <div className="pp"> <b>Harrassment </b>: Harassment is a board category under which many types of cyberbullying fall into, but it generally refers to a sustained and constant pattern of hurtful or threatening online messages sent with the intention of doing harm. </div>
            <div className="pp"> <b>Outdoxing </b>: It refers to the act of openly revealing sensitive information about someone with out their consent for purposes. </div>
            <div className="pp"> <b>Cyberstalking </b>: It is particularly serious form of cyber bullying that can extent to the physical harm of the victim. It can include monitoring, false, accustions, threat, etc. </div>
            <div className="pp"> <b>Fraping </b>:  It is when a bully uses your child's account to post inaapropriate content with their name to ruin their reputation. </div>
          </div>
        </div>
      </div>
      <div className="art3">
        <div className="info_head">Laws and Sanctions</div>
        <div className="info_cont">All states have laws requiring schools to respond to bullying. As cyberbullying has become more prevalent with the use of technology, many states now include cyberbullying, or mention cyberbullying offenses, under these laws. Schools may take action either as required by law, or with local or school policies that allow them to discipline or take other action. Some states also have provisions to address bullying if it affects school performance. You can learn about the laws and policies in each state, including if they cover cyberbullying.</div>
      </div>
    </div>
  );
}

export default Info;
