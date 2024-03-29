import { Box } from "@chakra-ui/react";
import Script from "next/script";

export default function Shows() {

  return (
    <Box>
      {/* Also loading here for initial page load if navigating to this link first */}
      <Script 
        id="bands-in-town" 
        src='/scripts/bandsintown/main.min.js'
      />

      <a 
        className="bit-widget-initializer"
        
        data-artist-name="id_15506954"
        
        data-background-color="rgba(0,0,0,1)"
        data-separator-color="rgba(126,211,33,1)"
        data-text-color="rgba(255,255,255,1)"
        data-font="Helvetica"
        data-auto-style="true"
        
        data-display-local-dates="true"
        data-local-dates-position="tab"
        data-display-past-dates="true"
        data-display-details="false"
        data-display-lineup="false"
        data-display-start-time="false"
        data-social-share-icon="true"
        data-display-limit="all"
        
        data-date-format="MMM. D, YYYY"
        data-date-orientation="horizontal"
        data-date-border-color="#08C3BA"
        data-date-border-width="1px"
        data-date-border-radius="10px"
        
        data-event-ticket-cta-size="medium"
        data-event-ticket-text="TICKETS"
        data-event-ticket-icon="false"
        data-event-ticket-cta-text-color="#FFFFFF"
        data-event-ticket-cta-bg-color="rgba(28,69,50,1)"
        data-event-ticket-cta-border-color="#08C3BA"
        data-event-ticket-cta-border-width="0px"
        data-event-ticket-cta-border-radius="4px"
        
        data-sold-out-button-text-color="#FFFFFF"
        data-sold-out-button-background-color="#9B9B9B"
        data-sold-out-button-border-color="#08C3BA"
        data-sold-out-button-clickable="true"
        
        data-event-rsvp-position="left"
        data-event-rsvp-cta-size="medium"
        data-event-rsvp-text="SET REMINDER"
        data-event-rsvp-icon="false"
        data-event-rsvp-cta-text-color="#08C3BA"
        data-event-rsvp-cta-bg-color="#FFFFFF"
        data-event-rsvp-cta-border-color="#08C3BA"
        data-event-rsvp-cta-border-width="1px"
        data-event-rsvp-cta-border-radius="4px"
        
        data-follow-section-position="top"
        data-follow-section-alignment="center"
        data-follow-section-header-text="Get updates on new shows, new music, and more."
        data-follow-section-cta-size="medium"
        data-follow-section-cta-text="FOLLOW"
        data-follow-section-cta-icon="true"
        data-follow-section-cta-text-color="#FFFFFF"
        data-follow-section-cta-bg-color="rgba(28,69,50,1)"
        data-follow-section-cta-border-color="rgba(28,69,50,1)"
        data-follow-section-cta-border-width="0px"
        data-follow-section-cta-border-radius="4px"
        
        data-play-my-city-position="bottom"
        data-play-my-city-alignment="Center"
        data-play-my-city-header-text="Don’t see a show near you?"
        data-play-my-city-cta-size="medium"
        data-play-my-city-cta-text="REQUEST A SHOW"
        data-play-my-city-cta-icon="true"
        data-play-my-city-cta-text-color="#FFFFFF"
        data-play-my-city-cta-bg-color="rgba(28,69,50,1)"
        data-play-my-city-cta-border-color="rgba(28,69,50,1)"
        data-play-my-city-cta-border-width="0px"
        data-play-my-city-cta-border-radius="4px"
        
        data-language="en"
        data-widget-width=""
        data-div-id=""
        data-app-id=""
        data-affil-code="undefined"
        data-bit-logo-position="bottomRight"
        data-bit-logo-color="#CCCCCC"
      >PLEASE RELOAD PAGE</a>
    </Box>
  )
}