var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",
    
    //State defaults
    state_description: "State Description",
    state_color: "grey",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Working time (start at 7 AM end at 9 PM)</em><li>Start at 6 AM</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days </li></ul><ul><em>Proof of age required?</em><li>No</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>"
    },
    AK: {
      name: "Alaska",
      description: "<ul><strong>Minimum working age (14)</strong><li>Worse: No minimum age: minors under 14 years can work casing cans in canneries under supervision.</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>9 hours which should include school and work per day</li></ul><ul><em>Max hours per school day (18)</em><li>23 hours</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>Start at 5 AM and end at 9 PM</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Working time (start at 7 AM end at 9 PM)</em><li>Start at 5 AM</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days (all minors)</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    FL: {
      name: "Florida",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16 year olds are permitted to drive</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (18)</em><li>15 hours</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>Fri-Sat: can work later than 7pm</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days (all minors)</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>No</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>"
    },
    NH: {
      name: "New Hampshire",
      description: "<strong>In 2022 New Hampshire enacted new laws which increased the hours 16-17 year olds who are full-time students can work when school is in session from 30 to 35; it also reduced the age at which a minor can bus tables where alcohol is served and restock alcohol products to 14, with adult supervision.</strong><ul><strong>Minimum working age (14)</strong><li>Worse: 12</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (18)</em><li>23 hours</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>End at 9 PM</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (40)</em><li>48 hours</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>",
      color: "#ffdd00"
    },
    VT: {
      name: "Vermont",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days </li></ul><ul><em>Proof of age required?</em><li>No</li></ul><ul><em>Work permit required?</em><li>Yes (for children not in school)</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    ME: {
      name: "Maine",
      description: "<strong>In early 2023 two amendments on the employment of minors were introduced: a subminimum wage for minors, and an increase in hours worked per week by a minor who is home-schooled.</strong><ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days (all minors)</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>",
      color: "#ffdd00"
    },
    RI: {
      name: "Rhode Island",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>8 hours</li></ul><ul><em>Max hours per school day (18)</em><li>40 hours</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>Start at 6:00 AM </li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Working time (start at 7 AM end at 9 PM)</em><li>Start at 6:00 AM </li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>Yes*</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>"
    },
    NY: {
      name: "New York",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>"
    },
    PA: {
      name: "Pennsylvania",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days (all minors)</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>"
    },
    NJ: {
      name: "New Jersey",
      description: "<strong>In 2022, Governor Murphy signed amendments to New Jersey's child labor laws. 16-17 year olds can now work 50 hours per week all year instead of 40, and 14-15 year olds can work 8 hours a day and 40 hours per week in vacations. Parental and school authority was also withdrawn from the work permit process.</strong><ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days </li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>",
      color: "#ffdd00"
    },
    DE: {
      name: "Delaware",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>4 hours</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days </li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes (all minors)</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>"
    },
    MD: {
      name: "Maryland",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>4 hours</li></ul><ul><em>Max hours per school day (18)</em><li>23 hours</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>End at 8 PM</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>"
    },
    VA: {
      name: "Virginia",
      description: "<strong>In 2023 a bill was introduced in Virginia to create a subminimum wage for minors. The bill failed in the House.</strong><ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>",
      color: "#ffdd00"
    },
    WV: {
      name: "West Virginia",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    OH: {
      name: "Ohio",
      description: "<strong>In May 2023, the Ohio Senate passed a bill to allow 14-15 year olds to work up to 9 PM on school nights. Governor DeWine has yet to sign the bill into law.</strong><ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>"
    },
    IN: {
      name: "Indiana",
      description: "<strong>In 2021, Indiana ended the requirement for work permits for minors and replaced it with an employer registration system for any employer hiring 5 or more minors.</strong><ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days (all minors)</li></ul><ul><em>Proof of age required?</em><li>No</li></ul><ul><em>Work permit required?</em><li>No</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>",
      color: "#ffdd00"
    },
    IL: {
      name: "Illinois",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (18)</em><li>24 hours</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (40)</em><li>48 hours</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days (when school is in session)</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    CT: {
      name: "Connecticut",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>8 hours </li></ul><ul><em>Max hours per school day (18)</em><li>40 hours </li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days </li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>"
    },
    WI: {
      name: "Wisconsin",
      description: "<strong>In 2022, Governor Evers vetoed a bill which would have allowed 14-15 year olds to start work at 6 AM and end at 9.30 PM Sun-Thurs, and end at 11 PM during vacations and on Fri-Sat, on the condition that the employer did not fall under the FLSA. In 2023, a bill was introduced to allow 14 year olds to carry alcohol to customers in bars/restaurants.</strong><ul><strong>Minimum working age (14)</strong><li>Worse: 12</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>4 hours</li></ul><ul><em>Max hours per school day (18)</em><li>24 hours if school is in session for fewer than 5 days</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days </li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>",
      color: "#ffdd00"
    },
    NC: {
      name: "North Carolina",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    DC: {
      name: "District of Columbia",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16 year olds can work with and clean power-driven machinery </li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>8 hours</li></ul><ul><em>Max hours per school day (18)</em><li>48 hours </li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (40)</em><li>48 hours</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days </li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>"
    },
    MA: {
      name: "Massachusetts",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>4 hours</li></ul><ul><em>Max hours per school day (18)</em><li>23 hours</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>End at 8 PM</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>"
    },
    TN: {
      name: "Tennessee",
      description: "<strong>In 2023, Tennessee changed its child labor laws to allow 16-17 year olds to work in venues where more than 25% of revenue comes from alcohol.</strong><ul><strong>Minimum working age (14)</strong><li>Worse: null</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>Fri-Sat: end at 9 PM<br>Sat-Sun: start at 6 PM</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Working time (start at 7 AM end at 9 PM)</em><li>Start at 6 AM</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>",
      color: "#ffdd00"
    },
    AR: {
      name: "Arkansas",
      description: "<strong>The Arkansas Youth Hiring Act was signed by Governor Huckabee Sanders in March 2023. It withdraws the requirement for work permits for minors.</strong><ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>8 hours</li></ul><ul><em>Max hours per school day (18)</em><li>48 hours</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>Start at 6 AM<br>Fri-Sat: start at 6 AM and end at 9 PM</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (40)</em><li>48 hours</li></ul><ul><em>Working time (start at 7 AM end at 9 PM)</em><li>Start at 6 AM</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days (all minors)</li></ul><ul><em>Proof of age required?</em><li>No</li></ul><ul><em>Work permit required?</em><li>No</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>",
      color: "#ffdd00"
    },
    MO: {
      name: "Missouri",
      description: "<strong>In Missouri two bills are in progress: one will withdraw the requirement for work permits, and the other will add a 10 PM curfew for 16-17 year olds Sun-Thurs when school is in session.</strong><ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (18)</em><li>40 hours per week</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>End at 9 PM </li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days </li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>",
      color: "#ffdd00"
    },
    GA: {
      name: "Georgia",
      description: "<strong>In 2023 a bill was introduced to withdraw the requirement for work permits and age certificates in Georgia. The bill was withdrawn.</strong><ul><strong>Minimum working age (14)</strong><li>Worse: 12</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>4 hours</li></ul><ul><em>Max hours per school day (18)</em><li>40 hours</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>Start at 6 AM and end at 9 PM</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Working time (start at 7 AM end at 9 PM)</em><li>Start at 6 AM</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>",
      color: "#ffdd00"
    },
    SC: {
      name: "South Carolina",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>No</li></ul><ul><em>Work permit required?</em><li>No</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    KY: {
      name: "Kentucky",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>No</li></ul><ul><em>Work permit required?</em><li>No</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    AL: {
      name: "Alabama",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days </li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>"
    },
    LA: {
      name: "Louisiana",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days </li></ul><ul><em>Proof of age required?</em><li>No</li></ul><ul><em>Work permit required?</em><li>Yes (all minors)</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>"
    },
    MS: {
      name: "Mississippi",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>8 hours if enrolled in school and the work is in a mill, cannery, workshop, factory, or manufacturing establishment</li></ul><ul><em>Max hours per school day (18)</em><li>44 hours if enrolled in school and the work is in a mill, cannery, workshop, factory, or manufacturing establishment</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>Start 6 AM if enrolled in school and the work is in a mill, cannery, workshop, factory, or manufacturing establishment</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (40)</em><li>44 hours if enrolled in school and the work is in a mill, cannery, workshop, factory, or manufacturing establishment</li></ul><ul><em>Working time (start at 7 AM end at 9 PM)</em><li>Start 6 AM if enrolled in school and the work is in a mill, cannery, workshop, factory, or manufacturing establishment</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>Yes if the work is in a mill, cannery, workshop, factory, or manufacturing establishment</li></ul><ul><em>Work permit required?</em><li>No</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    IA: {
      name: "Iowa",
      description: "<strong>Amendments to Iowa's child labor laws were signed by Governor Reynolds in May 2023. Children can now work in some hazardous occupations from the age of 14, and 14-15 year olds can work 6 hours per day during the school week (among other changes). Children under 14 are now prohibited from doing any type of work.</strong><ul><strong>Minimum working age (14)</strong><li>Worse: 14 with no exemptions</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 14</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>6 hours</li></ul><ul><em>Max hours per school day (18)</em><li>28 hours</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>End at 9 PM</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Working time (start at 7 AM end at 9 PM)</em><li>End at 11 PM</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>No</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>",
      color: "#ffdd00"
    },
    MN: {
      name: "Minnesota",
      description: "<strong>In Minnesota two bills are in progress: one will lower the minimum age for hazardous work (construction and building sites) to 16, the other will allow 14-15 year olds to start work at 6.30 AM, and end work at 11 PM during vacations and Fri-Sat when school is in session.</strong><ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>8 hours</li></ul><ul><em>Max hours per school day (18)</em><li>40 hours</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>End at 9 PM </li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>",
      color: "#ffdd00"
    },
    OK: {
      name: "Oklahoma",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days </li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    TX: {
      name: "Texas",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16 year olds can drive</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>8 hours</li></ul><ul><em>Max hours per school day (18)</em><li>48 hours</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>Start at 5 AM and end at 10 PM<br>Fri-Sat: end at midnight</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (40)</em><li>48 hours</li></ul><ul><em>Working time (start at 7 AM end at 9 PM)</em><li>Start at 5 AM and end at midnight</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>No</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    NM: {
      name: "New Mexico",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>No</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    KS: {
      name: "Kansas",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>No</li></ul><ul><em>Work permit required?</em><li>Yes (only for children not in school)</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    NE: {
      name: "Nebraska",
      description: "<strong>At present, minors receive the Nebraskan minimum wage ($10.50 in 2023 rising to $15 by 2026). In January 2023, a bill was introduced to create a subminimum wage for minors of $9 in 2023, rising to $10 by 2026.</strong><ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>8 hours</li></ul><ul><em>Max hours per school day (18)</em><li>48 hours</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>Start at 6 AM and end at 10 PM</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (40)</em><li>48 hours</li></ul><ul><em>Working time (start at 7 AM end at 9 PM)</em><li>Start at 6 AM and end at 10 PM</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>",
      color: "#ffdd00"
    },
    SD: {
      name: "South Dakota",
      description: "<strong>In 2023, a bill was introduced in South Dakota to allow children under the age of 14 to work up to 9 PM throughout the year. This was withdrawn. Children under the age of 14 can currently work until 7 PM.</strong><ul><strong>Minimum working age (14)</strong><li>Worse: No miminum age (with limitations on type and lateness of work for children under 14)</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>4 hours</li></ul><ul><em>Max hours per school day (18)</em><li>20 hours</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>End at 10 PM<br>Fri-Sat: can work later than 10 PM</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Working time (start at 7 AM end at 9 PM)</em><li>Can work later than 10 PM</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>No</li></ul><ul><em>Work permit required?</em><li>No</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>",
      color: "#ffdd00"
    },
    ND: {
      name: "North Dakota",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>No</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    WY: {
      name: "Wyoming",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>No</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    MT: {
      name: "Montana",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>No</li></ul><ul><em>Work permit required?</em><li>No</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    CO: {
      name: "Colorado",
      description: "<ul><strong>Minimum working age (14)</strong><li>Worse: 9</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 14</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>Sun-Thurs: 6 hours, Fri-Sat: 8 hours</li></ul><ul><em>Max hours per school day (18)</em><li>40 hours</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>Start at 5 AM and end at 9:30 PM<br>Fri-Sat: can end after 9.30 PM</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Working time (start at 7 AM end at 9 PM)</em><li>Start at 5 AM and can work after 9.30 PM</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>No</li></ul><ul><em>Work permit required?</em><li>No</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>"
    },
    UT: {
      name: "Utah",
      description: "<ul><strong>Minimum working age (14)</strong><li>Worse: 12</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>8 hours</li></ul><ul><em>Max hours per school day (18)</em><li>40 hours</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>Start at 5 AM and end at 9.30 PM<br>Fri-Sat: can end after 9.30 PM<br>Sat-Sun: can start before 5 AM</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Working time (start at 7 AM end at 9 PM)</em><li>Can start before 5 AM and end after 9.30 PM</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>No</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    AZ: {
      name: "Arizona",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16 year olds are permitted to drive; 16-17 year olds can undertake hazardous work if employed by a family member</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>Start at 6 AM and end at 9:30 PM<br>Fri-Sat: start at 6 AM and end at 11 PM</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Working time (start at 7 AM end at 9 PM)</em><li>Start at 6 AM and end at 11 PM</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>No</li></ul><ul><em>Work permit required?</em><li>No</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    NV: {
      name: "Nevada",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Worse: 16</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>8 hours</li></ul><ul><em>Max hours per school day (18)</em><li>48 hours</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (40)</em><li>48 hours</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>No</li></ul><ul><em>Work permit required?</em><li>No</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    OR: {
      name: "Oregon",
      description: "<ul><strong>Minimum working age (14)</strong><li>Worse: 12</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days </li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>"
    },
    WA: {
      name: "Washington",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (18)</em><li>16 hours</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days </li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes (all minors)</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>"
    },
    CA: {
      name: "California",
      description: "<ul><strong>Minimum working age (14)</strong><li>Worse: 12</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes</li></ul>"
    },
    MI: {
      name: "Michigan",
      description: "<strong>In 2022 Michigan passed laws to enable minors to sell and serve alcohol.</strong><ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (3)</em><li>10 hours </li></ul><ul><em>Max hours per school day (18)</em><li>48 hours if the 14-15 year old is not in school</li></ul><ul><em>Working time (start at 7 AM end at 7 PM)</em><li>End at 9 PM</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Worse</li></ul><ul><em>Max hours per school day (8)</em><li>10 hours<br>undefined</li></ul><ul><em>Max hours per school day (40)</em><li>48 hours</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>Yes</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>6 days (all minors)</li></ul><ul><em>Proof of age required?</em><li>Yes</li></ul><ul><em>Work permit required?</em><li>Yes</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>Yes (24 hours per week if in school when school is in session; start at 6 AM and end at 10.30 PM Sun-Thurs when school is in session; end at 11.30 PM Fri-Sat when school is in session; end 11.30pm during vacations) </li></ul>",
      color: "#ffdd00"
    },
    ID: {
      name: "Idaho",
      description: "<ul><strong>Minimum working age (14)</strong><li>Consistent: 14</li></ul><ul><strong>Minimum hazardous working age (14)</strong><li>Consistent: 18</li></ul><div><strong>Working hours when school is in session (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><div><strong>Working hours June 1st - Labor Day Weekend (14-15 year olds)</strong><ul><li>Consistent</li></ul></div><strong>Other state requirements</strong><ul><em>Do they get breaks?</em><li>No</li></ul><ul><em>Limit no. days/week a minor can work?</em><li>No</li></ul><ul><em>Proof of age required?</em><li>No</li></ul><ul><em>Work permit required?</em><li>No</li></ul><ul><em>Hours regulated for 16-17 year olds?</em><li>No</li></ul>"
    },
    GU: {
      name: "Guam",
      hide: "yes"
    },
    VI: {
      name: "Virgin Islands",
      hide: "yes"
    },
    PR: {
      name: "Puerto Rico",
      hide: "yes"
    },
    MP: {
      name: "Northern Mariana Islands",
      hide: "yes"
    },
    AS: {
      name: "American Samoa",
      hide: "yes"
    }
  },
  locations: {},
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};