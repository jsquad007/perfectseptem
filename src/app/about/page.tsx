import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Perfect Septem",
  description: "The story behind Perfect Septem.",
};

export default function AboutPage() {
  return (
    <div className="pt-8 max-w-2xl">
      <h1 className="text-4xl font-bold text-[#e5e2e1] mb-8">About</h1>

      <div className="space-y-6 text-[#bbc9c7] leading-7">
        <p>
          Following the intercession of St Joseph in 2021, I experienced God&apos;s help in overcoming
          a struggle with sin. As a result, my faith deepened, and my gratitude to God grew stronger.
        </p>
        <p>
          Around that time, I also began watching and listening to Catholic media such as{" "}
          <em>The Catholic Talk Show</em>, <em>Pints with Aquinas</em>, <em>Parousia Media</em>,
          and <em>Against the Grain</em>. Through these resources, God helped me gain a deeper
          understanding of the Catholic faith and develop a richer prayer life.
        </p>
        <p>
          Perfect Septem is a small corner of the internet where I share reflections on faith,
          prayer, and the Catholic life — as a way of giving back the Good News that was shared with me.
        </p>
        <blockquote className="border-l-4 border-[#0bb4aa] pl-6 italic text-[#bbc9c7]">
          &ldquo;I do not say to you seven times, but seventy times seven.&rdquo;
          <br />
          <cite className="text-sm text-[#869491] not-italic mt-2 block">— Matthew 18:22</cite>
        </blockquote>
        <p>
          The name <strong className="text-[#e5e2e1]">Perfect Septem</strong> (Latin for &ldquo;perfect seven&rdquo;)
          is drawn from the biblical significance of the number seven — completion, covenant, and divine blessing.
        </p>
        <div className="mt-8 pt-6 border-t border-[#3c4948]/30">
          <p className="text-sm">
            Want to get in touch?{" "}
            <span className="text-[#51dbd0] select-all">
              perfectseptem AT gmail.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
