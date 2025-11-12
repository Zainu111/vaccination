const FeedbackButton = ({ setIsFeedbackOpen }) => (
  <div className="fixed bottom-5 sm:bottom-[70px] right-4 sm:right-5 text-center z-[1000] group">
    <button
      onClick={() => setIsFeedbackOpen(true)}
      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-gray-200 cursor-pointer flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 relative z-[1001]"
      aria-label="Open Feedback Form"
    >
      <img src="ghp-logo.png" alt="" className="w-4/5 h-auto p-1" />
    </button>
    <div className="absolute right-[70px] sm:right-[90px] bottom-0 bg-[#f5ac57] p-3 rounded-lg z-10 hidden group-hover:block whitespace-nowrap text-xs shadow-lg">
      <h4 className="text-left font-semibold mb-1">Any Feedback?</h4>
      <p className="text-left text-[#333] text-xs font-medium">
        Help us improve by sharing your insights.
      </p>
    </div>
  </div>
);

export default FeedbackButton;
