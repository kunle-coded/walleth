import SettingsItemToggle from "../../ui/SettingsItemToggle";

function Experimental() {
  return (
    <div className="p-4 pt-0">
      <SettingsItemToggle
        title="Allow nicknames"
        details="This lets you assign a nickname to any address. We’ll suggest names for addresses that you interact with when possible."
        column
      />
      <SettingsItemToggle
        title="Improved signature requests"
        details="Turn this on to see signature requests in an enhanced format."
        column
      />
      <SettingsItemToggle
        title="Improved transaction requests"
        details="Turn this on to see transactions requests in an enhanced format."
        column
      />
      <SettingsItemToggle
        title="Select networks for each site"
        details="This allows you to select a network for each site instead of a single selected network for all sites. This feature will prevent you from switching networks manually, which may break your user experience on certain sites."
        column
      />
      <h4 className="mb-2 leading-6 font-bold text-secondary-600 md:text-lg">
        Snaps
      </h4>
      <div className="flex flex-col min-w-0">
        <span>Account Snaps</span>
        <div className="text-secondary-500 text-[0.895rem] leading-[140%]">
          <h6 className="text-xs leading-5 text-secondary-500 md:text-sm md:leading-snug">
            Accounts controlled by third-party Snaps.
          </h6>
        </div>
      </div>
      <SettingsItemToggle
        title={`Enable "Add account Snap (Beta)"`}
        details="Turning on this feature will give you the option to add the new Beta account Snaps right from your account list. If you install an account Snap, remember that it is a third-party service."
        column
      />
    </div>
  );
}

export default Experimental;
