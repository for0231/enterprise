(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.app = {
    attach: function attach(context) {
      console.log('fdsafda');
      /*
       * GLOBAL: Sound Config (define sound path, enable or disable all sounds)
       */
      $.sound_path = "http://drupal.server.host/modules/isp/themes/colors/assets/sound/";
      $.sound_on = true;
      pageSetUp();
    }
  };
  /*
   * =======================================================================
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   * =======================================================================
   * original filename: app.config.js
   * filesize: 12kb
   * =======================================================================
   *
   * GLOBAL ROOT (DO NOT CHANGE)
   */
  $.root_ = $('body');
  /*
   * APP CONFIGURATION (HTML/AJAX/PHP Versions ONLY)
   * Description: Enable / disable certain theme features here
   * GLOBAL: Your left nav in your app will no longer fire ajax calls, set
   * it to false for HTML version
   */
  $.navAsAjax = false;

  /*
   * SAVE INSTANCE REFERENCE (DO NOT CHANGE)
   * Save a reference to the global object (window in the browser)
   */
  var root = this,
    /*
     * DEBUGGING MODE
     * debugState = true; will spit all debuging message inside browser console.
     * The colors are best displayed in chrome browser.
     */
    debugState = true,
    debugStyle = 'font-weight: bold; color: #00f;',
    debugStyle_green = 'font-weight: bold; font-style:italic; color: #46C246;',
    debugStyle_red = 'font-weight: bold; color: #ed1c24;',
    debugStyle_warning = 'background-color:yellow',
    debugStyle_success = 'background-color:green; font-weight:bold; color:#fff;',
    debugStyle_error = 'background-color:#ed1c24; font-weight:bold; color:#fff;',
    /*
     * Impacts the responce rate of some of the responsive elements (lower
     * value affects CPU but improves speed)
     */
    throttle_delay = 350,
    /*
     * The rate at which the menu expands revealing child elements on click
     */
    menu_speed = 235,
    /*
     * Collapse current menu item as other menu items are expanded
     * Careful when using this option, if you have a long menu it will
     * keep expanding and may distrupt the user experience This is best
     * used with fixed-menu class
     */
    menu_accordion = true,
    /*
     * Turn on JarvisWidget functionality
     * Global JarvisWidget Settings
     * For a greater control of the widgets, please check app.js file
     * found within COMMON_ASSETS/UNMINIFIED_JS folder and see from line 1355
     * dependency: js/jarviswidget/jarvis.widget.min.js
     */
    enableJarvisWidgets = true,
    /*
     * Use localstorage to save widget settings
     * turn this off if you prefer to use the onSave hook to save
     * these settings to your datatabse instead
     */
    localStorageJarvisWidgets = true,
    /*
     * Turn off sortable feature for JarvisWidgets
     */
    sortableJarvisWidgets = true,
    /*
     * Warning: Enabling mobile widgets could potentially crash your webApp
     * if you have too many widgets running at once
     * (must have enableJarvisWidgets = true)
     */
    enableMobileWidgets = false,
    /*
     * Turn on fast click for mobile devices
     * Enable this to activate fastclick plugin
     * dependency: js/plugin/fastclick/fastclick.js
     */
    fastClick = false,
    /*
     * SMARTCHAT PLUGIN ARRAYS & CONFIG
     * Dependency: js/plugin/moment/moment.min.js
     *             js/plugin/cssemotions/jquery.cssemoticons.min.js
     *             js/smart-chat-ui/smart.chat.ui.js
     * (DO NOT CHANGE BELOW)
     */
    boxList = [],
    showList = [],
    nameList = [],
    idList = [],
    /*
     * Width of the chat boxes, and the gap inbetween in pixel (minus padding)
     */
    chatbox_config = {
      width: 200,
      gap: 35
    },
    /*
     * These elements are ignored during DOM object deletion for ajax version
     * It will delete all objects during page load with these exceptions:
     */
    ignore_key_elms = ["#header, #left-panel, #right-panel, #main, div.page-footer, #shortcut, #divSmallBoxes, #divMiniIcons, #divbigBoxes, #voiceModal, script, .ui-chatbox"],
    /*
     * VOICE COMMAND CONFIG
     * dependency: js/speech/voicecommand.js
     */
    voice_command = true,
    /*
     * Turns on speech as soon as the page is loaded
     */
    voice_command_auto = false,
    /*
     * 	Sets the language to the default 'en-US'. (supports over 50 languages
     * 	by google)
     *
     *  Afrikaans         ['af-ZA']
     *  Bahasa Indonesia  ['id-ID']
     *  Bahasa Melayu     ['ms-MY']
     *  Català            ['ca-ES']
     *  Čeština           ['cs-CZ']
     *  Deutsch           ['de-DE']
     *  English           ['en-AU', 'Australia']
     *                    ['en-CA', 'Canada']
     *                    ['en-IN', 'India']
     *                    ['en-NZ', 'New Zealand']
     *                    ['en-ZA', 'South Africa']
     *                    ['en-GB', 'United Kingdom']
     *                    ['en-US', 'United States']
     *  Español           ['es-AR', 'Argentina']
     *                    ['es-BO', 'Bolivia']
     *                    ['es-CL', 'Chile']
     *                    ['es-CO', 'Colombia']
     *                    ['es-CR', 'Costa Rica']
     *                    ['es-EC', 'Ecuador']
     *                    ['es-SV', 'El Salvador']
     *                    ['es-ES', 'España']
     *                    ['es-US', 'Estados Unidos']
     *                    ['es-GT', 'Guatemala']
     *                    ['es-HN', 'Honduras']
     *                    ['es-MX', 'México']
     *                    ['es-NI', 'Nicaragua']
     *                    ['es-PA', 'Panamá']
     *                    ['es-PY', 'Paraguay']
     *                    ['es-PE', 'Perú']
     *                    ['es-PR', 'Puerto Rico']
     *                    ['es-DO', 'República Dominicana']
     *                    ['es-UY', 'Uruguay']
     *                    ['es-VE', 'Venezuela']
     *  Euskara           ['eu-ES']
     *  Français          ['fr-FR']
     *  Galego            ['gl-ES']
     *  Hrvatski          ['hr_HR']
     *  IsiZulu           ['zu-ZA']
     *  Íslenska          ['is-IS']
     *  Italiano          ['it-IT', 'Italia']
     *                    ['it-CH', 'Svizzera']
     *  Magyar            ['hu-HU']
     *  Nederlands        ['nl-NL']
     *  Norsk bokmål      ['nb-NO']
     *  Polski            ['pl-PL']
     *  Português         ['pt-BR', 'Brasil']
     *                    ['pt-PT', 'Portugal']
     *  Română            ['ro-RO']
     *  Slovenčina        ['sk-SK']
     *  Suomi             ['fi-FI']
     *  Svenska           ['sv-SE']
     *  Türkçe            ['tr-TR']
     *  български         ['bg-BG']
     *  Pусский           ['ru-RU']
     *  Српски            ['sr-RS']
     *  한국어          ['ko-KR']
     *  中文                            ['cmn-Hans-CN', '普通话 (中国大陆)']
     *                    ['cmn-Hans-HK', '普通话 (香港)']
     *                    ['cmn-Hant-TW', '中文 (台灣)']
     *                    ['yue-Hant-HK', '粵語 (香港)']
     *  日本語                         ['ja-JP']
     *  Lingua latīna     ['la']
     */
    voice_command_lang = 'en-US',
    /*
     * 	Use localstorage to remember on/off (best used with HTML Version
     * 	when going from one page to the next)
     */
    voice_localStorage = true;
  /*
   * Voice Commands
   * Defines voice command variables and functions
   */
  if (voice_command) {
    
    var commands = {
      
      'show dashboard': function () {
        $('nav a[href="dashboard.html"]')
          .trigger("click");
      },
      'show inbox': function () {
        $('nav a[href="inbox.html"]')
          .trigger("click");
      },
      'show graphs': function () {
        $('nav a[href="flot.html"]')
          .trigger("click");
      },
      'show flotchart': function () {
        $('nav a[href="flot.html"]')
          .trigger("click");
      },
      'show morris chart': function () {
        $('nav a[href="morris.html"]')
          .trigger("click");
      },
      'show inline chart': function () {
        $('nav a[href="inline-charts.html"]')
          .trigger("click");
      },
      'show dygraphs': function () {
        $('nav a[href="dygraphs.html"]')
          .trigger("click");
      },
      'show tables': function () {
        $('nav a[href="table.html"]')
          .trigger("click");
      },
      'show data table': function () {
        $('nav a[href="datatables.html"]')
          .trigger("click");
      },
      'show jquery grid': function () {
        $('nav a[href="jqgrid.html"]')
          .trigger("click");
      },
      'show form': function () {
        $('nav a[href="form-elements.html"]')
          .trigger("click");
      },
      'show form layouts': function () {
        $('nav a[href="form-templates.html"]')
          .trigger("click");
      },
      'show form validation': function () {
        $('nav a[href="validation.html"]')
          .trigger("click");
      },
      'show form elements': function () {
        $('nav a[href="bootstrap-forms.html"]')
          .trigger("click");
      },
      'show form plugins': function () {
        $('nav a[href="plugins.html"]')
          .trigger("click");
      },
      'show form wizards': function () {
        $('nav a[href="wizards.html"]')
          .trigger("click");
      },
      'show bootstrap editor': function () {
        $('nav a[href="other-editors.html"]')
          .trigger("click");
      },
      'show dropzone': function () {
        $('nav a[href="dropzone.html"]')
          .trigger("click");
      },
      'show image cropping': function () {
        $('nav a[href="image-editor.html"]')
          .trigger("click");
      },
      'show general elements': function () {
        $('nav a[href="general-elements.html"]')
          .trigger("click");
      },
      'show buttons': function () {
        $('nav a[href="buttons.html"]')
          .trigger("click");
      },
      'show fontawesome': function () {
        $('nav a[href="fa.html"]')
          .trigger("click");
      },
      'show glyph icons': function () {
        $('nav a[href="glyph.html"]')
          .trigger("click");
      },
      'show flags': function () {
        $('nav a[href="flags.html"]')
          .trigger("click");
      },
      'show grid': function () {
        $('nav a[href="grid.html"]')
          .trigger("click");
      },
      'show tree view': function () {
        $('nav a[href="treeview.html"]')
          .trigger("click");
      },
      'show nestable lists': function () {
        $('nav a[href="nestable-list.html"]')
          .trigger("click");
      },
      'show jquery U I': function () {
        $('nav a[href="jqui.html"]')
          .trigger("click");
      },
      'show typography': function () {
        $('nav a[href="typography.html"]')
          .trigger("click");
      },
      'show calendar': function () {
        $('nav a[href="calendar.html"]')
          .trigger("click");
      },
      'show widgets': function () {
        $('nav a[href="widgets.html"]')
          .trigger("click");
      },
      'show gallery': function () {
        $('nav a[href="gallery.html"]')
          .trigger("click");
      },
      'show maps': function () {
        $('nav a[href="gmap-xml.html"]')
          .trigger("click");
      },
      'show pricing tables': function () {
        $('nav a[href="pricing-table.html"]')
          .trigger("click");
      },
      'show invoice': function () {
        $('nav a[href="invoice.html"]')
          .trigger("click");
      },
      'show search': function () {
        $('nav a[href="search.html"]')
          .trigger("click");
      },
      'go back': function () {
        history.back(1);
      },
      'scroll up': function () {
        $('html, body')
          .animate({
            scrollTop: 0
          }, 100);
      },
      'scroll down': function () {
        $('html, body')
          .animate({
            scrollTop: $(document)
              .height()
          }, 100);
      },
      'hide navigation': function () {
        if ($.root_.hasClass("container") && !$.root_.hasClass("menu-on-top")) {
          $('span.minifyme')
            .trigger("click");
        } else {
          $('#hide-menu > span > a')
            .trigger("click");
        }
      },
      'show navigation': function () {
        if ($.root_.hasClass("container") && !$.root_.hasClass("menu-on-top")) {
          $('span.minifyme')
            .trigger("click");
        } else {
          $('#hide-menu > span > a')
            .trigger("click");
        }
      },
      'mute': function () {
        $.sound_on = false;
        $.smallBox({
          title: "MUTE",
          content: "All sounds have been muted!",
          color: "#a90329",
          timeout: 4000,
          icon: "fa fa-volume-off"
        });
      },
      'sound on': function () {
        $.sound_on = true;
        $.speechApp.playConfirmation();
        $.smallBox({
          title: "UNMUTE",
          content: "All sounds have been turned on!",
          color: "#40ac2b",
          sound_file: 'voice_alert',
          timeout: 5000,
          icon: "fa fa-volume-up"
        });
      },
      'stop': function () {
        smartSpeechRecognition.abort();
        $.root_.removeClass("voice-command-active");
        $.smallBox({
          title: "VOICE COMMAND OFF",
          content: "Your voice commands has been successfully turned off. Click on the <i class='fa fa-microphone fa-lg fa-fw'></i> icon to turn it back on.",
          color: "#40ac2b",
          sound_file: 'voice_off',
          timeout: 8000,
          icon: "fa fa-microphone-slash"
        });
        if ($('#speech-btn .popover')
          .is(':visible')) {
          $('#speech-btn .popover')
            .fadeOut(250);
        }
      },
      'help': function () {
        $('#voiceModal')
          .removeData('modal')
          .modal({
            remote: "ajax/modal-content/modal-voicecommand.html",
            show: true
          });
        if ($('#speech-btn .popover')
          .is(':visible')) {
          $('#speech-btn .popover')
            .fadeOut(250);
        }
      },
      'got it': function () {
        $('#voiceModal')
          .modal('hide');
      },
      'logout': function () {
        $.speechApp.stop();
        window.location = $('#logout > span > a')
          .attr("href");
      }
    };
    
  }
  /*
   * END APP.CONFIG
   */
  
  /*
   * GLOBAL: interval array (to be used with jarviswidget in ajax and
   * angular mode) to clear auto fetch interval
   */
  $.intervalArr = [];
  /*
   * Calculate nav height
   */
  var calc_navbar_height = function () {
      var height = null;
      
      if ($('#header')
        .length)
        height = $('#header')
          .height();
      
      if (height === null)
        height = $('<div id="header"></div>')
          .height();
      
      if (height === null)
        return 49;
      // default
      return height;
    },
    
    navbar_height = calc_navbar_height,
    /*
     * APP DOM REFERENCES
     * Description: Obj DOM reference, please try to avoid changing these
     */
    shortcut_dropdown = $('#shortcut'),
    
    bread_crumb = $('#ribbon ol.breadcrumb'),
    /*
     * Top menu on/off
     */
    topmenu = false,
    /*
     * desktop or mobile
     */
    thisDevice = null,
    /*
     * DETECT MOBILE DEVICES
     * Description: Detects mobile device - if any of the listed device is
     * detected a class is inserted to $.root_ and the variable thisDevice
     * is decleard. (so far this is covering most hand held devices)
     */
    ismobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())),
    /*
     * JS ARRAY SCRIPT STORAGE
     * Description: used with loadScript to store script path and file name
     * so it will not load twice
     */
    jsArray = {},
    /*
     * App Initialize
     * Description: Initializes the app with intApp();
     */
    initApp = (function (app) {
      
      /*
       * ADD DEVICE TYPE
       * Detect if mobile or desktop
       */
      app.addDeviceType = function () {
        
        if (!ismobile) {
          // Desktop
          $.root_.addClass("desktop-detected");
          thisDevice = "desktop";
          return false;
        } else {
          // Mobile
          $.root_.addClass("mobile-detected");
          thisDevice = "mobile";
          
          if (fastClick) {
            // Removes the tap delay in idevices
            // dependency: js/plugin/fastclick/fastclick.js
            $.root_.addClass("needsclick");
            FastClick.attach(document.body);
            return false;
          }
          
        }
        
      };
      /* ~ END: ADD DEVICE TYPE */
      
      /*
       * CHECK FOR MENU POSITION
       * Scans localstroage for menu position (vertical or horizontal)
       */
      app.menuPos = function () {
        
        if ($.root_.hasClass("menu-on-top") || localStorage.getItem('sm-setmenu') == 'top') {
          topmenu = true;
          $.root_.addClass("menu-on-top");
        }
      };
      /* ~ END: CHECK MOBILE DEVICE */
      
      /*
       * SMART ACTIONS
       */
      app.SmartActions = function () {
        
        var smartActions = {
          
          // LOGOUT MSG
          userLogout: function ($this) {
            
            // ask verification
            $.SmartMessageBox({
              title: "<i class='fa fa-sign-out txt-color-orangeDark'></i> Logout <span class='txt-color-orangeDark'><strong>" + $('#show-shortcut')
                .text() + "</strong></span> ?",
              content: $this.data('logout-msg') || Drupal.t("You can improve your security further after logging out by closing this opened browser"),
              buttons: '[' + Drupal.t('No') + '][' + Drupal.t('Yes') + ']'
              
            }, function (ButtonPressed) {
              if (ButtonPressed == "Yes") {
                $.root_.addClass('animated fadeOutUp');
                setTimeout(logout, 1000);
              }
            });
            
            function logout() {
              window.location = $this.attr('href');
            }
            
          },
          
          // RESET WIDGETS
          resetWidgets: function ($this) {
            
            $.SmartMessageBox({
              title: "<i class='fa fa-refresh' style='color:green'></i> " + Drupal.t("Clear Local Storage"),
              content: $this.data('reset-msg') || Drupal.t("Would you like to RESET all your saved widgets and clear LocalStorage?"),
              buttons: '[' + Drupal.t('No') + '][' + Drupal.t('Yes') + ']'
            }, function (ButtonPressed) {
              if (ButtonPressed == Drupal.t("Yes") && localStorage) {
                localStorage.clear();
                location.reload();
              }
              
            });
          },
          
          // LAUNCH FULLSCREEN
          launchFullscreen: function (element) {
            
            if (!$.root_.hasClass("full-screen")) {
              
              $.root_.addClass("full-screen");
              
              if (element.requestFullscreen) {
                element.requestFullscreen();
              } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
              } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
              } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
              }
              
            } else {
              
              $.root_.removeClass("full-screen");
              
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              }
              
            }
            
          },
          
          // MINIFY MENU
          minifyMenu: function ($this) {
            if (!$.root_.hasClass("menu-on-top")) {
              $.root_.toggleClass("minified");
              $.root_.removeClass("hidden-menu");
              $('html')
                .removeClass("hidden-menu-mobile-lock");
              $this.effect("highlight", {}, 500);
            }
          },
          
          // TOGGLE MENU
          toggleMenu: function () {
            if (!$.root_.hasClass("menu-on-top")) {
              $('html')
                .toggleClass("hidden-menu-mobile-lock");
              $.root_.toggleClass("hidden-menu");
              $.root_.removeClass("minified");
              //} else if ( $.root_.hasClass("menu-on-top") && $.root_.hasClass("mobile-view-activated") ) {
              // suggested fix from Christian Jäger
            } else if ($.root_.hasClass("menu-on-top") && $(window)
              .width() < 979) {
              $('html')
                .toggleClass("hidden-menu-mobile-lock");
              $.root_.toggleClass("hidden-menu");
              $.root_.removeClass("minified");
            }
          },
          
          // TOGGLE SHORTCUT
          toggleShortcut: function () {
            
            if (shortcut_dropdown.is(":visible")) {
              shortcut_buttons_hide();
            } else {
              shortcut_buttons_show();
            }
            
            // SHORT CUT (buttons that appear when clicked on user name)
            shortcut_dropdown.find('a')
              .click(function (e) {
                e.preventDefault();
                window.location = $(this)
                  .attr('href');
                setTimeout(shortcut_buttons_hide, 300);
                
              });
            
            // SHORTCUT buttons goes away if mouse is clicked outside of the area
            $(document)
              .mouseup(function (e) {
                if (!shortcut_dropdown.is(e.target) && shortcut_dropdown.has(e.target)
                  .length === 0) {
                  shortcut_buttons_hide();
                }
              });
            
            // SHORTCUT ANIMATE HIDE
            function shortcut_buttons_hide() {
              shortcut_dropdown.animate({
                height: "hide"
              }, 300, "easeOutCirc");
              $.root_.removeClass('shortcut-on');
              
            }
            
            // SHORTCUT ANIMATE SHOW
            function shortcut_buttons_show() {
              shortcut_dropdown.animate({
                height: "show"
              }, 200, "easeOutCirc");
              $.root_.addClass('shortcut-on');
            }
            
          }
          
        };
        
        $.root_.on('click', '[data-action="userLogout"]', function (e) {
          var $this = $(this);
          smartActions.userLogout($this);
          e.preventDefault();
          
          //clear memory reference
          $this = null;
          
        });
        
        /*
         * BUTTON ACTIONS
         */
        $.root_.on('click', '[data-action="resetWidgets"]', function (e) {
          var $this = $(this);
          smartActions.resetWidgets($this);
          e.preventDefault();
          
          //clear memory reference
          $this = null;
        });
        
        $.root_.on('click', '[data-action="launchFullscreen"]', function (e) {
          smartActions.launchFullscreen(document.documentElement);
          e.preventDefault();
        });
        
        $.root_.on('click', '[data-action="minifyMenu"]', function (e) {
          var $this = $(this);
          smartActions.minifyMenu($this);
          e.preventDefault();
          
          //clear memory reference
          $this = null;
        });
        
        $.root_.on('click', '[data-action="toggleMenu"]', function (e) {
          smartActions.toggleMenu();
          e.preventDefault();
        });
        
        $.root_.on('click', '[data-action="toggleShortcut"]', function (e) {
          smartActions.toggleShortcut();
          e.preventDefault();
        });
        
      };
      /* ~ END: SMART ACTIONS */
      
      /*
       * ACTIVATE NAVIGATION
       * Description: Activation will fail if top navigation is on
       */
      app.leftNav = function () {
        
        // INITIALIZE LEFT NAV
        if (!topmenu) {
          if (!null) {
            $('nav ul')
              .jarvismenu({
                accordion: menu_accordion || true,
                speed: menu_speed || true,
                closedSign: '<em class="fa fa-plus-square-o"></em>',
                openedSign: '<em class="fa fa-minus-square-o"></em>'
              });
          } else {
            alert("Error - menu anchor does not exist");
          }
        }
        
      };
      /* ~ END: ACTIVATE NAVIGATION */
      
      /*
       * MISCELANEOUS DOM READY FUNCTIONS
       * Description: fire with jQuery(document).ready...
       */
      app.domReadyMisc = function () {
        
        /*
         * FIRE TOOLTIPS

        if ($("[rel=tooltip]").length) {
          $("[rel=tooltip]").tooltip();
        }*/
        
        // SHOW & HIDE MOBILE SEARCH FIELD
        $('#search-mobile')
          .click(function () {
            $.root_.addClass('search-mobile');
          });
        
        $('#cancel-search-js')
          .click(function () {
            $.root_.removeClass('search-mobile');
          });
        
        // ACTIVITY
        // ajax drop
        $('#activity')
          .click(function (e) {
            var $this = $(this);
            
            if ($this.find('.badge')
              .hasClass('bg-color-red')) {
              $this.find('.badge')
                .removeClassPrefix('bg-color-');
              $this.find('.badge')
                .text("0");
            }
            
            if (!$this.next('.ajax-dropdown')
              .is(':visible')) {
              $this.next('.ajax-dropdown')
                .fadeIn(150);
              $this.addClass('active');
            } else {
              $this.next('.ajax-dropdown')
                .fadeOut(150);
              $this.removeClass('active');
            }
            
            var theUrlVal = $this.next('.ajax-dropdown')
              .find('.btn-group > .active > input')
              .attr('id');
            
            //clear memory reference
            $this = null;
            theUrlVal = null;
            
            e.preventDefault();
          });
        
        $('input[name="activity"]')
          .change(function () {
            var $this = $(this);
            
            url = $this.attr('id');
            container = $('.ajax-notifications');
            
            loadURL(url, container);
            
            //clear memory reference
            $this = null;
          });
        
        // close dropdown if mouse is not inside the area of .ajax-dropdown
        $(document)
          .mouseup(function (e) {
            if (!$('.ajax-dropdown')
              .is(e.target) && $('.ajax-dropdown')
              .has(e.target)
              .length === 0) {
              $('.ajax-dropdown')
                .fadeOut(150);
              $('.ajax-dropdown')
                .prev()
                .removeClass("active");
            }
          });
        
        // loading animation (demo purpose only)
        $('button[data-btn-loading]')
          .on('click', function () {
            var btn = $(this);
            btn.button('loading');
            setTimeout(function () {
              btn.button('reset');
            }, 3000);
          });
        
        // NOTIFICATION IS PRESENT
        // Change color of lable once notification button is clicked
        
        $this = $('#activity > .badge');
        
        if (parseInt($this.text()) > 0) {
          $this.addClass("bg-color-red bounceIn animated");
          
          //clear memory reference
          $this = null;
        }
        
        
      };
      /* ~ END: MISCELANEOUS DOM */
      
      /*
       * MISCELANEOUS DOM READY FUNCTIONS
       * Description: fire with jQuery(document).ready...
       */
      app.mobileCheckActivation = function () {
        
        if ($(window)
          .width() < 979) {
          $.root_.addClass('mobile-view-activated');
          $.root_.removeClass('minified');
        } else if ($.root_.hasClass('mobile-view-activated')) {
          $.root_.removeClass('mobile-view-activated');
        }
        
        if (debugState) {
          console.log("mobileCheckActivation");
        }
        
      }
      /* ~ END: MISCELANEOUS DOM */
      
      return app;
      
    })({});
  
  initApp.addDeviceType();
  initApp.menuPos();
  /*
   * DOCUMENT LOADED EVENT
   * Description: Fire when DOM is ready
   */
  jQuery(document)
    .ready(function () {
      
      initApp.SmartActions();
      initApp.leftNav();
      initApp.domReadyMisc();
      
    });
  /*
   * RESIZER WITH THROTTLE
   * Source: http://benalman.com/code/projects/jquery-resize/examples/resize/
   */
  (function ($, window, undefined) {
    
    var elems = $([]),
      jq_resize = $.resize = $.extend($.resize, {}),
      timeout_id, str_setTimeout = 'setTimeout',
      str_resize = 'resize',
      str_data = str_resize + '-special-event',
      str_delay = 'delay',
      str_throttle = 'throttleWindow';
    
    jq_resize[str_delay] = throttle_delay;
    
    jq_resize[str_throttle] = true;
    
    $.event.special[str_resize] = {
      
      setup: function () {
        if (!jq_resize[str_throttle] && this[str_setTimeout]) {
          return false;
        }
        
        var elem = $(this);
        elems = elems.add(elem);
        try {
          $.data(this, str_data, {
            w: elem.width(),
            h: elem.height()
          });
        } catch (e) {
          $.data(this, str_data, {
            w: elem.width, // elem.width();
            h: elem.height // elem.height();
          });
        }
        
        if (elems.length === 1) {
          loopy();
        }
      },
      teardown: function () {
        if (!jq_resize[str_throttle] && this[str_setTimeout]) {
          return false;
        }
        
        var elem = $(this);
        elems = elems.not(elem);
        elem.removeData(str_data);
        if (!elems.length) {
          clearTimeout(timeout_id);
        }
      },
      
      add: function (handleObj) {
        if (!jq_resize[str_throttle] && this[str_setTimeout]) {
          return false;
        }
        var old_handler;
        
        function new_handler(e, w, h) {
          var elem = $(this),
            data = $.data(this, str_data);
          data.w = w !== undefined ? w : elem.width();
          data.h = h !== undefined ? h : elem.height();
          
          old_handler.apply(this, arguments);
        }
        if ($.isFunction(handleObj)) {
          old_handler = handleObj;
          return new_handler;
        } else {
          old_handler = handleObj.handler;
          handleObj.handler = new_handler;
        }
      }
    };
    
    function loopy() {
      timeout_id = window[str_setTimeout](function () {
        elems.each(function () {
          var width;
          var height;
          
          var elem = $(this),
            data = $.data(this, str_data); //width = elem.width(), height = elem.height();
          
          // Highcharts fix
          try {
            width = elem.width();
          } catch (e) {
            width = elem.width;
          }
          
          try {
            height = elem.height();
          } catch (e) {
            height = elem.height;
          }
          //fixed bug
          
          
          if (width !== data.w || height !== data.h) {
            elem.trigger(str_resize, [data.w = width, data.h = height]);
          }
          
        });
        loopy();
        
      }, jq_resize[str_delay]);
      
    }
    
  })(jQuery, this);
  /*
   * ADD CLASS WHEN BELOW CERTAIN WIDTH (MOBILE MENU)
   * Description: tracks the page min-width of #CONTENT and NAV when navigation is resized.
   * This is to counter bugs for minimum page width on many desktop and mobile devices.
   * Note: This script utilizes JSthrottle script so don't worry about memory/CPU usage
   */
  $('#main')
    .resize(function () {
      
      initApp.mobileCheckActivation();
      
    });
  
  /* ~ END: NAV OR #LEFT-BAR RESIZE DETECT */
  
  /*
   * DETECT IE VERSION
   * Description: A short snippet for detecting versions of IE in JavaScript
   * without resorting to user-agent sniffing
   * RETURNS:
   * If you're not in IE (or IE version is less than 5) then:
   * //ie === undefined
   *
   * If you're in IE (>=5) then you can determine which version:
   * // ie === 7; // IE7
   *
   * Thus, to detect IE:
   * // if (ie) {}
   *
   * And to detect the version:
   * ie === 6 // IE6
   * ie > 7 // IE8, IE9 ...
   * ie < 9 // Anything less than IE9
   */
  // TODO: delete this function later on - no longer needed (?)
  var ie = (function () {
    
    var undef, v = 3,
      div = document.createElement('div'),
      all = div.getElementsByTagName('i');
    
    while (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0]);
    
    return v > 4 ? v : undef;
    
  }());
  /* ~ END: DETECT IE VERSION */
  
  /*
   * CUSTOM MENU PLUGIN
   */
  $.fn.extend({
    
    //pass the options variable to the function
    jarvismenu: function (options) {
      
      var defaults = {
          accordion: 'true',
          speed: 200,
          closedSign: '[+]',
          openedSign: '[-]'
        },
        
        // Extend our default options with those provided.
        opts = $.extend(defaults, options),
        //Assign current element to variable, in this case is UL element
        $this = $(this);
      
      //add a mark [+] to a multilevel menu
      $this.find("li")
        .each(function () {
          if ($(this)
            .find("ul")
            .length !== 0) {
            //add the multilevel sign next to the link
            $(this)
              .find("a:first")
              .append("<b class='collapse-sign'>" + opts.closedSign + "</b>");
            
            //avoid jumping to the top of the page when the href is an #
            if ($(this)
              .find("a:first")
              .attr('href') == "#") {
              $(this)
                .find("a:first")
                .click(function () {
                  return false;
                });
            }
          }
        });
      
      //open active level
      $this.find("li.active")
        .each(function () {
          $(this)
            .parents("ul")
            .slideDown(opts.speed);
          $(this)
            .parents("ul")
            .parent("li")
            .find("b:first")
            .html(opts.openedSign);
          $(this)
            .parents("ul")
            .parent("li")
            .addClass("open");
        });
      
      $this.find("li a")
        .click(function () {
          
          if ($(this)
            .parent()
            .find("ul")
            .length !== 0) {
            
            if (opts.accordion) {
              //Do nothing when the list is open
              if (!$(this)
                .parent()
                .find("ul")
                .is(':visible')) {
                parents = $(this)
                  .parent()
                  .parents("ul");
                visible = $this.find("ul:visible");
                visible.each(function (visibleIndex) {
                  var close = true;
                  parents.each(function (parentIndex) {
                    if (parents[parentIndex] == visible[visibleIndex]) {
                      close = false;
                      return false;
                    }
                  });
                  if (close) {
                    if ($(this)
                      .parent()
                      .find("ul") != visible[visibleIndex]) {
                      $(visible[visibleIndex])
                        .slideUp(opts.speed, function () {
                          $(this)
                            .parent("li")
                            .find("b:first")
                            .html(opts.closedSign);
                          $(this)
                            .parent("li")
                            .removeClass("open");
                        });
                      
                    }
                  }
                });
              }
            } // end if
            if ($(this)
              .parent()
              .find("ul:first")
              .is(":visible") && !$(this)
              .parent()
              .find("ul:first")
              .hasClass("active")) {
              $(this)
                .parent()
                .find("ul:first")
                .slideUp(opts.speed, function () {
                  $(this)
                    .parent("li")
                    .removeClass("open");
                  $(this)
                    .parent("li")
                    .find("b:first")
                    .delay(opts.speed)
                    .html(opts.closedSign);
                });
              
            } else {
              $(this)
                .parent()
                .find("ul:first")
                .slideDown(opts.speed, function () {
                  /*$(this).effect("highlight", {color : '#616161'}, 500); - disabled due to CPU clocking on phones*/
                  $(this)
                    .parent("li")
                    .addClass("open");
                  $(this)
                    .parent("li")
                    .find("b:first")
                    .delay(opts.speed)
                    .html(opts.openedSign);
                });
            } // end else
          } // end if
        });
    } // end function
  });
  /* ~ END: CUSTOM MENU PLUGIN */
  
  /*
   * ELEMENT EXIST OR NOT
   * Description: returns true or false
   * Usage: $('#myDiv').doesExist();
   */
  jQuery.fn.doesExist = function () {
    return jQuery(this)
      .length > 0;
  };
  /* ~ END: ELEMENT EXIST OR NOT */
  
  /*
   * INITIALIZE FORMS
   * Description: Select2, Masking, Datepicker, Autocomplete
   */
  function runAllForms() {
    
    /*
     * BOOTSTRAP SLIDER PLUGIN
     * Usage:
     * Dependency: js/plugin/bootstrap-slider
     */
    if ($.fn.slider) {
      $('.slider')
        .slider();
    }
    
    /*
     * SELECT2 PLUGIN
     * Usage:
     * Dependency: js/plugin/select2/
     */
    if ($.fn.select2) {
      $('select.select2')
        .each(function () {
          var $this = $(this),
            width = $this.attr('data-select-width') || '100%';
          //, _showSearchInput = $this.attr('data-select-search') === 'true';
          $this.select2({
            //showSearchInput : _showSearchInput,
            allowClear: true,
            width: width
          });
          
          //clear memory reference
          $this = null;
        });
    }
    
    /*
     * MASKING
     * Dependency: js/plugin/masked-input/
     */
    if ($.fn.mask) {
      $('[data-mask]')
        .each(function () {
          
          var $this = $(this),
            mask = $this.attr('data-mask') || 'error...',
            mask_placeholder = $this.attr('data-mask-placeholder') || 'X';
          
          $this.mask(mask, {
            placeholder: mask_placeholder
          });
          
          //clear memory reference
          $this = null;
        });
    }
    
    /*
     * AUTOCOMPLETE
     * Dependency: js/jqui
     */
    if ($.fn.autocomplete) {
      $('[data-autocomplete]')
        .each(function () {
          
          var $this = $(this),
            availableTags = $this.data('autocomplete') || ["The", "Quick", "Brown", "Fox", "Jumps", "Over", "Three", "Lazy", "Dogs"];
          
          $this.autocomplete({
            source: availableTags
          });
          
          //clear memory reference
          $this = null;
        });
    }
    
    /*
     * JQUERY UI DATE
     * Dependency: js/libs/jquery-ui-1.10.3.min.js
     * Usage: <input class="datepicker" />
     */
    if ($.fn.datepicker) {
      $('.datepicker')
        .each(function () {
          
          var $this = $(this),
            dataDateFormat = $this.attr('data-dateformat') || 'dd.mm.yy';
          
          $this.datepicker({
            dateFormat: dataDateFormat,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
          });
          
          //clear memory reference
          $this = null;
        });
    }
    
    /*
     * AJAX BUTTON LOADING TEXT
     * Usage: <button type="button" data-loading-text="Loading..." class="btn btn-xs btn-default ajax-refresh"> .. </button>
     */
    $('button[data-loading-text]')
      .on('click', function () {
        var btn = $(this);
        btn.button('loading');
        setTimeout(function () {
          btn.button('reset');
          //clear memory reference
          btn = null;
        }, 3000);
        
      });
    
  }
  /* ~ END: INITIALIZE FORMS */
  
  /*
   * INITIALIZE CHARTS
   * Description: Sparklines, PieCharts
   */
  function runAllCharts() {
    /*
     * SPARKLINES
     * DEPENDENCY: js/plugins/sparkline/jquery.sparkline.min.js
     * See usage example below...
     */
    
    /* Usage:
     * 		<div class="sparkline-line txt-color-blue" data-fill-color="transparent" data-sparkline-height="26px">
     *			5,6,7,9,9,5,9,6,5,6,6,7,7,6,7,8,9,7
     *		</div>
     */
    
    if ($.fn.sparkline) {
      
      // variable declearations:
      
      var barColor,
        sparklineHeight,
        sparklineBarWidth,
        sparklineBarSpacing,
        sparklineNegBarColor,
        sparklineStackedColor,
        thisLineColor,
        thisLineWidth,
        thisFill,
        thisSpotColor,
        thisMinSpotColor,
        thisMaxSpotColor,
        thishighlightSpotColor,
        thisHighlightLineColor,
        thisSpotRadius,
        pieColors,
        pieWidthHeight,
        pieBorderColor,
        pieOffset,
        thisBoxWidth,
        thisBoxHeight,
        thisBoxRaw,
        thisBoxTarget,
        thisBoxMin,
        thisBoxMax,
        thisShowOutlier,
        thisIQR,
        thisBoxSpotRadius,
        thisBoxLineColor,
        thisBoxFillColor,
        thisBoxWhisColor,
        thisBoxOutlineColor,
        thisBoxOutlineFill,
        thisBoxMedianColor,
        thisBoxTargetColor,
        thisBulletHeight,
        thisBulletWidth,
        thisBulletColor,
        thisBulletPerformanceColor,
        thisBulletRangeColors,
        thisDiscreteHeight,
        thisDiscreteWidth,
        thisDiscreteLineColor,
        thisDiscreteLineHeight,
        thisDiscreteThrushold,
        thisDiscreteThrusholdColor,
        thisTristateHeight,
        thisTristatePosBarColor,
        thisTristateNegBarColor,
        thisTristateZeroBarColor,
        thisTristateBarWidth,
        thisTristateBarSpacing,
        thisZeroAxis,
        thisBarColor,
        sparklineWidth,
        sparklineValue,
        sparklineValueSpots1,
        sparklineValueSpots2,
        thisLineWidth1,
        thisLineWidth2,
        thisLineColor1,
        thisLineColor2,
        thisSpotRadius1,
        thisSpotRadius2,
        thisMinSpotColor1,
        thisMaxSpotColor1,
        thisMinSpotColor2,
        thisMaxSpotColor2,
        thishighlightSpotColor1,
        thisHighlightLineColor1,
        thishighlightSpotColor2,
        thisFillColor1,
        thisFillColor2;
      
      $('.sparkline:not(:has(>canvas))')
        .each(function () {
          var $this = $(this),
            sparklineType = $this.data('sparkline-type') || 'bar';
          
          // BAR CHART
          if (sparklineType == 'bar') {
            
            barColor = $this.data('sparkline-bar-color') || $this.css('color') || '#0000f0';
            sparklineHeight = $this.data('sparkline-height') || '26px';
            sparklineBarWidth = $this.data('sparkline-barwidth') || 5;
            sparklineBarSpacing = $this.data('sparkline-barspacing') || 2;
            sparklineNegBarColor = $this.data('sparkline-negbar-color') || '#A90329';
            sparklineStackedColor = $this.data('sparkline-barstacked-color') || ["#A90329", "#0099c6", "#98AA56", "#da532c", "#4490B1", "#6E9461", "#990099", "#B4CAD3"];
            
            $this.sparkline('html', {
              barColor: barColor,
              type: sparklineType,
              height: sparklineHeight,
              barWidth: sparklineBarWidth,
              barSpacing: sparklineBarSpacing,
              stackedBarColor: sparklineStackedColor,
              negBarColor: sparklineNegBarColor,
              zeroAxis: 'false'
            });
            
            $this = null;
            
          }
          
          // LINE CHART
          if (sparklineType == 'line') {
            
            sparklineHeight = $this.data('sparkline-height') || '20px';
            sparklineWidth = $this.data('sparkline-width') || '90px';
            thisLineColor = $this.data('sparkline-line-color') || $this.css('color') || '#0000f0';
            thisLineWidth = $this.data('sparkline-line-width') || 1;
            thisFill = $this.data('fill-color') || '#c0d0f0';
            thisSpotColor = $this.data('sparkline-spot-color') || '#f08000';
            thisMinSpotColor = $this.data('sparkline-minspot-color') || '#ed1c24';
            thisMaxSpotColor = $this.data('sparkline-maxspot-color') || '#f08000';
            thishighlightSpotColor = $this.data('sparkline-highlightspot-color') || '#50f050';
            thisHighlightLineColor = $this.data('sparkline-highlightline-color') || 'f02020';
            thisSpotRadius = $this.data('sparkline-spotradius') || 1.5;
            thisChartMinYRange = $this.data('sparkline-min-y') || 'undefined';
            thisChartMaxYRange = $this.data('sparkline-max-y') || 'undefined';
            thisChartMinXRange = $this.data('sparkline-min-x') || 'undefined';
            thisChartMaxXRange = $this.data('sparkline-max-x') || 'undefined';
            thisMinNormValue = $this.data('min-val') || 'undefined';
            thisMaxNormValue = $this.data('max-val') || 'undefined';
            thisNormColor = $this.data('norm-color') || '#c0c0c0';
            thisDrawNormalOnTop = $this.data('draw-normal') || false;
            
            $this.sparkline('html', {
              type: 'line',
              width: sparklineWidth,
              height: sparklineHeight,
              lineWidth: thisLineWidth,
              lineColor: thisLineColor,
              fillColor: thisFill,
              spotColor: thisSpotColor,
              minSpotColor: thisMinSpotColor,
              maxSpotColor: thisMaxSpotColor,
              highlightSpotColor: thishighlightSpotColor,
              highlightLineColor: thisHighlightLineColor,
              spotRadius: thisSpotRadius,
              chartRangeMin: thisChartMinYRange,
              chartRangeMax: thisChartMaxYRange,
              chartRangeMinX: thisChartMinXRange,
              chartRangeMaxX: thisChartMaxXRange,
              normalRangeMin: thisMinNormValue,
              normalRangeMax: thisMaxNormValue,
              normalRangeColor: thisNormColor,
              drawNormalOnTop: thisDrawNormalOnTop
              
            });
            
            $this = null;
            
          }
          
          // PIE CHART
          if (sparklineType == 'pie') {
            
            pieColors = $this.data('sparkline-piecolor') || ["#B4CAD3", "#4490B1", "#98AA56", "#da532c", "#6E9461", "#0099c6", "#990099", "#717D8A"];
            pieWidthHeight = $this.data('sparkline-piesize') || 90;
            pieBorderColor = $this.data('border-color') || '#45494C';
            pieOffset = $this.data('sparkline-offset') || 0;
            
            $this.sparkline('html', {
              type: 'pie',
              width: pieWidthHeight,
              height: pieWidthHeight,
              tooltipFormat: '<span style="color: {{color}}">&#9679;</span> ({{percent.1}}%)',
              sliceColors: pieColors,
              borderWidth: 1,
              offset: pieOffset,
              borderColor: pieBorderColor
            });
            
            $this = null;
            
          }
          
          // BOX PLOT
          if (sparklineType == 'box') {
            
            thisBoxWidth = $this.data('sparkline-width') || 'auto';
            thisBoxHeight = $this.data('sparkline-height') || 'auto';
            thisBoxRaw = $this.data('sparkline-boxraw') || false;
            thisBoxTarget = $this.data('sparkline-targetval') || 'undefined';
            thisBoxMin = $this.data('sparkline-min') || 'undefined';
            thisBoxMax = $this.data('sparkline-max') || 'undefined';
            thisShowOutlier = $this.data('sparkline-showoutlier') || true;
            thisIQR = $this.data('sparkline-outlier-iqr') || 1.5;
            thisBoxSpotRadius = $this.data('sparkline-spotradius') || 1.5;
            thisBoxLineColor = $this.css('color') || '#000000';
            thisBoxFillColor = $this.data('fill-color') || '#c0d0f0';
            thisBoxWhisColor = $this.data('sparkline-whis-color') || '#000000';
            thisBoxOutlineColor = $this.data('sparkline-outline-color') || '#303030';
            thisBoxOutlineFill = $this.data('sparkline-outlinefill-color') || '#f0f0f0';
            thisBoxMedianColor = $this.data('sparkline-outlinemedian-color') || '#f00000';
            thisBoxTargetColor = $this.data('sparkline-outlinetarget-color') || '#40a020';
            
            $this.sparkline('html', {
              type: 'box',
              width: thisBoxWidth,
              height: thisBoxHeight,
              raw: thisBoxRaw,
              target: thisBoxTarget,
              minValue: thisBoxMin,
              maxValue: thisBoxMax,
              showOutliers: thisShowOutlier,
              outlierIQR: thisIQR,
              spotRadius: thisBoxSpotRadius,
              boxLineColor: thisBoxLineColor,
              boxFillColor: thisBoxFillColor,
              whiskerColor: thisBoxWhisColor,
              outlierLineColor: thisBoxOutlineColor,
              outlierFillColor: thisBoxOutlineFill,
              medianColor: thisBoxMedianColor,
              targetColor: thisBoxTargetColor
              
            });
            
            $this = null;
            
          }
          
          // BULLET
          if (sparklineType == 'bullet') {
            
            var thisBulletHeight = $this.data('sparkline-height') || 'auto';
            thisBulletWidth = $this.data('sparkline-width') || 2;
            thisBulletColor = $this.data('sparkline-bullet-color') || '#ed1c24';
            thisBulletPerformanceColor = $this.data('sparkline-performance-color') || '#3030f0';
            thisBulletRangeColors = $this.data('sparkline-bulletrange-color') || ["#d3dafe", "#a8b6ff", "#7f94ff"];
            
            $this.sparkline('html', {
              
              type: 'bullet',
              height: thisBulletHeight,
              targetWidth: thisBulletWidth,
              targetColor: thisBulletColor,
              performanceColor: thisBulletPerformanceColor,
              rangeColors: thisBulletRangeColors
              
            });
            
            $this = null;
            
          }
          
          // DISCRETE
          if (sparklineType == 'discrete') {
            
            thisDiscreteHeight = $this.data('sparkline-height') || 26;
            thisDiscreteWidth = $this.data('sparkline-width') || 50;
            thisDiscreteLineColor = $this.css('color');
            thisDiscreteLineHeight = $this.data('sparkline-line-height') || 5;
            thisDiscreteThrushold = $this.data('sparkline-threshold') || 'undefined';
            thisDiscreteThrusholdColor = $this.data('sparkline-threshold-color') || '#ed1c24';
            
            $this.sparkline('html', {
              
              type: 'discrete',
              width: thisDiscreteWidth,
              height: thisDiscreteHeight,
              lineColor: thisDiscreteLineColor,
              lineHeight: thisDiscreteLineHeight,
              thresholdValue: thisDiscreteThrushold,
              thresholdColor: thisDiscreteThrusholdColor
              
            });
            
            $this = null;
            
          }
          
          // TRISTATE
          if (sparklineType == 'tristate') {
            
            thisTristateHeight = $this.data('sparkline-height') || 26;
            thisTristatePosBarColor = $this.data('sparkline-posbar-color') || '#60f060';
            thisTristateNegBarColor = $this.data('sparkline-negbar-color') || '#f04040';
            thisTristateZeroBarColor = $this.data('sparkline-zerobar-color') || '#909090';
            thisTristateBarWidth = $this.data('sparkline-barwidth') || 5;
            thisTristateBarSpacing = $this.data('sparkline-barspacing') || 2;
            thisZeroAxis = $this.data('sparkline-zeroaxis') || false;
            
            $this.sparkline('html', {
              
              type: 'tristate',
              height: thisTristateHeight,
              posBarColor: thisBarColor,
              negBarColor: thisTristateNegBarColor,
              zeroBarColor: thisTristateZeroBarColor,
              barWidth: thisTristateBarWidth,
              barSpacing: thisTristateBarSpacing,
              zeroAxis: thisZeroAxis
              
            });
            
            $this = null;
            
          }
          
          //COMPOSITE: BAR
          if (sparklineType == 'compositebar') {
            
            sparklineHeight = $this.data('sparkline-height') || '20px';
            sparklineWidth = $this.data('sparkline-width') || '100%';
            sparklineBarWidth = $this.data('sparkline-barwidth') || 3;
            thisLineWidth = $this.data('sparkline-line-width') || 1;
            thisLineColor = $this.data('data-sparkline-linecolor') || '#ed1c24';
            thisBarColor = $this.data('data-sparkline-barcolor') || '#333333';
            
            $this.sparkline($this.data('sparkline-bar-val'), {
              
              type: 'bar',
              width: sparklineWidth,
              height: sparklineHeight,
              barColor: thisBarColor,
              barWidth: sparklineBarWidth
              //barSpacing: 5
              
            });
            
            $this.sparkline($this.data('sparkline-line-val'), {
              
              width: sparklineWidth,
              height: sparklineHeight,
              lineColor: thisLineColor,
              lineWidth: thisLineWidth,
              composite: true,
              fillColor: false
              
            });
            
            $this = null;
            
          }
          
          //COMPOSITE: LINE
          if (sparklineType == 'compositeline') {
            
            sparklineHeight = $this.data('sparkline-height') || '20px';
            sparklineWidth = $this.data('sparkline-width') || '90px';
            sparklineValue = $this.data('sparkline-bar-val');
            sparklineValueSpots1 = $this.data('sparkline-bar-val-spots-top') || null;
            sparklineValueSpots2 = $this.data('sparkline-bar-val-spots-bottom') || null;
            thisLineWidth1 = $this.data('sparkline-line-width-top') || 1;
            thisLineWidth2 = $this.data('sparkline-line-width-bottom') || 1;
            thisLineColor1 = $this.data('sparkline-color-top') || '#333333';
            thisLineColor2 = $this.data('sparkline-color-bottom') || '#ed1c24';
            thisSpotRadius1 = $this.data('sparkline-spotradius-top') || 1.5;
            thisSpotRadius2 = $this.data('sparkline-spotradius-bottom') || thisSpotRadius1;
            thisSpotColor = $this.data('sparkline-spot-color') || '#f08000';
            thisMinSpotColor1 = $this.data('sparkline-minspot-color-top') || '#ed1c24';
            thisMaxSpotColor1 = $this.data('sparkline-maxspot-color-top') || '#f08000';
            thisMinSpotColor2 = $this.data('sparkline-minspot-color-bottom') || thisMinSpotColor1;
            thisMaxSpotColor2 = $this.data('sparkline-maxspot-color-bottom') || thisMaxSpotColor1;
            thishighlightSpotColor1 = $this.data('sparkline-highlightspot-color-top') || '#50f050';
            thisHighlightLineColor1 = $this.data('sparkline-highlightline-color-top') || '#f02020';
            thishighlightSpotColor2 = $this.data('sparkline-highlightspot-color-bottom') ||
              thishighlightSpotColor1;
            thisHighlightLineColor2 = $this.data('sparkline-highlightline-color-bottom') ||
              thisHighlightLineColor1;
            thisFillColor1 = $this.data('sparkline-fillcolor-top') || 'transparent';
            thisFillColor2 = $this.data('sparkline-fillcolor-bottom') || 'transparent';
            
            $this.sparkline(sparklineValue, {
              
              type: 'line',
              spotRadius: thisSpotRadius1,
              
              spotColor: thisSpotColor,
              minSpotColor: thisMinSpotColor1,
              maxSpotColor: thisMaxSpotColor1,
              highlightSpotColor: thishighlightSpotColor1,
              highlightLineColor: thisHighlightLineColor1,
              
              valueSpots: sparklineValueSpots1,
              
              lineWidth: thisLineWidth1,
              width: sparklineWidth,
              height: sparklineHeight,
              lineColor: thisLineColor1,
              fillColor: thisFillColor1
              
            });
            
            $this.sparkline($this.data('sparkline-line-val'), {
              
              type: 'line',
              spotRadius: thisSpotRadius2,
              
              spotColor: thisSpotColor,
              minSpotColor: thisMinSpotColor2,
              maxSpotColor: thisMaxSpotColor2,
              highlightSpotColor: thishighlightSpotColor2,
              highlightLineColor: thisHighlightLineColor2,
              
              valueSpots: sparklineValueSpots2,
              
              lineWidth: thisLineWidth2,
              width: sparklineWidth,
              height: sparklineHeight,
              lineColor: thisLineColor2,
              composite: true,
              fillColor: thisFillColor2
              
            });
            
            $this = null;
            
          }
          
        });
      
    } // end if
    
    /*
     * EASY PIE CHARTS
     * DEPENDENCY: js/plugins/easy-pie-chart/jquery.easy-pie-chart.min.js
     * Usage: <div class="easy-pie-chart txt-color-orangeDark" data-pie-percent="33" data-pie-size="72" data-size="72">
     *			<span class="percent percent-sign">35</span>
     * 	  	  </div>
     */
    
    if ($.fn.easyPieChart) {
      
      $('.easy-pie-chart')
        .each(function () {
          var $this = $(this),
            barColor = $this.css('color') || $this.data('pie-color'),
            trackColor = $this.data('pie-track-color') || 'rgba(0,0,0,0.04)',
            size = parseInt($this.data('pie-size')) || 25;
          
          $this.easyPieChart({
            
            barColor: barColor,
            trackColor: trackColor,
            scaleColor: false,
            lineCap: 'butt',
            lineWidth: parseInt(size / 8.5),
            animate: 1500,
            rotate: -90,
            size: size,
            onStep: function (from, to, percent) {
              $(this.el)
                .find('.percent')
                .text(Math.round(percent));
            }
            
          });
          
          $this = null;
        });
      
    } // end if
    
  }
  /* ~ END: INITIALIZE CHARTS */
  
  /*
   * INITIALIZE JARVIS WIDGETS
   * Setup Desktop Widgets
   */
  function setup_widgets_desktop() {
    
    if ($.fn.jarvisWidgets && enableJarvisWidgets) {
      
      $('#widget-grid')
        .jarvisWidgets({
          
          grid: 'article',
          widgets: '.jarviswidget',
          localStorage: localStorageJarvisWidgets,
          deleteSettingsKey: '#deletesettingskey-options',
          settingsKeyLabel: 'Reset settings?',
          deletePositionKey: '#deletepositionkey-options',
          positionKeyLabel: 'Reset position?',
          sortable: sortableJarvisWidgets,
          buttonsHidden: false,
          // toggle button
          toggleButton: true,
          toggleClass: 'fa fa-minus | fa fa-plus',
          toggleSpeed: 200,
          onToggle: function () {},
          // delete btn
          deleteButton: true,
          deleteMsg: 'Warning: This action cannot be undone!',
          deleteClass: 'fa fa-times',
          deleteSpeed: 200,
          onDelete: function () {},
          // edit btn
          editButton: true,
          editPlaceholder: '.jarviswidget-editbox',
          editClass: 'fa fa-cog | fa fa-save',
          editSpeed: 200,
          onEdit: function () {},
          // color button
          colorButton: true,
          // full screen
          fullscreenButton: true,
          fullscreenClass: 'fa fa-expand | fa fa-compress',
          fullscreenDiff: 3,
          onFullscreen: function () {},
          // custom btn
          customButton: false,
          customClass: 'folder-10 | next-10',
          customStart: function () {
            alert('Hello you, this is a custom button...');
          },
          customEnd: function () {
            alert('bye, till next time...');
          },
          // order
          buttonOrder: '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
          opacity: 1.0,
          dragHandle: '> header',
          placeholderClass: 'jarviswidget-placeholder',
          indicator: true,
          indicatorTime: 600,
          ajax: true,
          timestampPlaceholder: '.jarviswidget-timestamp',
          timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
          refreshButton: true,
          refreshButtonClass: 'fa fa-refresh',
          labelError: 'Sorry but there was a error:',
          labelUpdated: 'Last Update:',
          labelRefresh: 'Refresh',
          labelDelete: 'Delete widget:',
          afterLoad: function () {},
          rtl: false, // best not to toggle this!
          onChange: function () {
          
          },
          onSave: function () {
          
          },
          ajaxnav: $.navAsAjax // declears how the localstorage should be saved (HTML or AJAX Version)
          
        });
      
    }
    
  }
  /*
   * SETUP DESKTOP WIDGET
   */
  
  function setup_widgets_mobile() {
    
    if (enableMobileWidgets && enableJarvisWidgets) {
      setup_widgets_desktop();
    }
    
  }
  /* ~ END: INITIALIZE JARVIS WIDGETS */
  
  /*
   * GOOGLE MAPS
   * description: Append google maps to head dynamically (only execute for ajax version)
   * Loads at the begining for ajax pages
   */
  if ($.navAsAjax || $(".google_maps")) {
    var gMapsLoaded = false;
    window.gMapsCallback = function () {
      gMapsLoaded = true;
      $(window)
        .trigger('gMapsLoaded');
    };
    window.loadGoogleMaps = function () {
      if (gMapsLoaded)
        return window.gMapsCallback();
      var script_tag = document.createElement('script');
      script_tag.setAttribute("type", "text/javascript");
      script_tag.setAttribute("src", "https://maps.google.com/maps/api/js?sensor=false&callback=gMapsCallback");
      (document.getElementsByTagName("head")[0] || document.documentElement)
        .appendChild(script_tag);
    };
  }
  /* ~ END: GOOGLE MAPS */
  
  /*
   * LOAD SCRIPTS
   * Usage:
   * Define function = myPrettyCode ()...
   * loadScript("js/my_lovely_script.js", myPrettyCode);
   */
  
  function loadScript(scriptName, callback) {
    
    if (!jsArray[scriptName]) {
      var promise = jQuery.Deferred();
      
      // adding the script tag to the head as suggested before
      var body = document.getElementsByTagName('body')[0],
        script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = scriptName;
      
      // then bind the event to the callback function
      // there are several events for cross browser compatibility
      script.onload = function () {
        promise.resolve();
      };
      
      // fire the loading
      body.appendChild(script);
      
      // clear DOM reference
      //body = null;
      //script = null;
      
      jsArray[scriptName] = promise.promise();
      
    } else if (debugState)
    // root.root.console.log("This script was already loaded %c: " + scriptName, debugStyle_warning);
      console.log("This script was already loaded %c: " + scriptName, debugStyle_warning);
    
    jsArray[scriptName].then(function () {
      if (typeof callback === 'function')
        callback();
    });
  }
  
  /* ~ END: LOAD SCRIPTS */
  
  /*
   * APP AJAX REQUEST SETUP
   * Description: Executes and fetches all ajax requests also
   * updates naivgation elements to active
   */
  if ($.navAsAjax) {
    // fire this on page load if nav exists
    if ($('nav')
      .length) {
      checkURL();
    }
    
    $(document)
      .on('click', 'nav a[href!="#"]', function (e) {
        e.preventDefault();
        var $this = $(e.currentTarget);
        
        // if parent is not active then get hash, or else page is assumed to be loaded
        if (!$this.parent()
          .hasClass("active") && !$this.attr('target')) {
          
          // update window with hash
          // you could also do here:  thisDevice === "mobile" - and save a little more memory
          
          if ($.root_.hasClass('mobile-view-activated')) {
            $.root_.removeClass('hidden-menu');
            $('html')
              .removeClass("hidden-menu-mobile-lock");
            window.setTimeout(function () {
              if (window.location.search) {
                window.location.href =
                  window.location.href.replace(window.location.search, '')
                    .replace(window.location.hash, '') + '#' + $this.attr('href');
              } else {
                window.location.hash = $this.attr('href');
              }
            }, 150);
            // it may not need this delay...
          } else {
            if (window.location.search) {
              window.location.href =
                window.location.href.replace(window.location.search, '')
                  .replace(window.location.hash, '') + '#' + $this.attr('href');
            } else {
              window.location.hash = $this.attr('href');
            }
          }
          
          // clear DOM reference
          // $this = null;
        }
        
      });
    
    // fire links with targets on different window
    $(document)
      .on('click', 'nav a[target="_blank"]', function (e) {
        e.preventDefault();
        var $this = $(e.currentTarget);
        
        window.open($this.attr('href'));
      });
    
    // fire links with targets on same window
    $(document)
      .on('click', 'nav a[target="_top"]', function (e) {
        e.preventDefault();
        var $this = $(e.currentTarget);
        
        window.location = ($this.attr('href'));
      });
    
    // all links with hash tags are ignored
    $(document)
      .on('click', 'nav a[href="#"]', function (e) {
        e.preventDefault();
      });
    
    // DO on hash change
    $(window)
      .on('hashchange', function () {
        checkURL();
      });
  }
  /*
   * CHECK TO SEE IF URL EXISTS
   */
  function checkURL() {
    
    //get the url by removing the hash
    //var url = location.hash.replace(/^#/, '');
    var url = location.href.split('#')
      .splice(1)
      .join('#');
    //BEGIN: IE11 Work Around
    if (!url) {
      
      try {
        var documentUrl = window.document.URL;
        if (documentUrl) {
          if (documentUrl.indexOf('#', 0) > 0 && documentUrl.indexOf('#', 0) < (documentUrl.length + 1)) {
            url = documentUrl.substring(documentUrl.indexOf('#', 0) + 1);
            
          }
          
        }
        
      } catch (err) {}
    }
    //END: IE11 Work Around
    
    container = $('#content');
    // Do this if url exists (for page refresh, etc...)
    if (url) {
      // remove all active class
      $('nav li.active')
        .removeClass("active");
      // match the url and add the active class
      $('nav li:has(a[href="' + url + '"])')
        .addClass("active");
      var title = ($('nav a[href="' + url + '"]')
        .attr('title'));
      
      // change page title from global var
      document.title = (title || document.title);
      
      // debugState
      if (debugState) {
        root.console.log("Page title: %c " + document.title, debugStyle_green);
      }
      
      // parse url to jquery
      loadURL(url + location.search, container);
      
    } else {
      
      // grab the first URL from nav
      var $this = $('nav > ul > li:first-child > a[href!="#"]');
      
      //update hash
      window.location.hash = $this.attr('href');
      
      //clear dom reference
      $this = null;
      
    }
    
  }
  /*
   * LOAD AJAX PAGES
   */
  
  function loadURL(url, container) {
    
    // debugState
    if (debugState) {
      // root.root.console.log("Loading URL: %c" + url, debugStyle);
      console.log("Loading URL: %c" + url, debugStyle);
    }
    
    $.ajax({
      type: "GET",
      url: url,
      dataType: 'html',
      cache: true, // (warning: setting it to false will cause a timestamp and will call the request twice)
      beforeSend: function () {
        
        //IE11 bug fix for googlemaps (delete all google map instances)
        //check if the page is ajax = true, has google map class and the container is #content
        if ($.navAsAjax && $(".google_maps")[0] && (container[0] == $("#content")[0])) {
          
          // target gmaps if any on page
          var collection = $(".google_maps"),
            i = 0;
          // run for each	map
          collection.each(function () {
            i++;
            // get map id from class elements
            var divDealerMap = document.getElementById(this.id);
            
            if (i == collection.length + 1) {
              // "callback"
            } else {
              // destroy every map found
              if (divDealerMap) divDealerMap.parentNode.removeChild(divDealerMap);
              
              // debugState
              if (debugState) {
                root.console.log("Destroying maps.........%c" + this.id, debugStyle_warning);
              }
            }
          });
          
          // debugState
          if (debugState) {
            root.console.log("✔ Google map instances nuked!!!");
          }
          
        } //end fix
        
        // destroy all datatable instances
        if ($.navAsAjax && $('.dataTables_wrapper')[0] && (container[0] == $("#content")[0])) {
          
          var tables = $.fn.dataTable.fnTables(true);
          $(tables)
            .each(function () {
              
              if ($(this)
                .find('.details-control')
                .length != 0) {
                $(this)
                  .find('*')
                  .addBack()
                  .off()
                  .remove();
                $(this)
                  .dataTable()
                  .fnDestroy();
              } else {
                $(this)
                  .dataTable()
                  .fnDestroy();
              }
              
            });
          
          // debugState
          if (debugState) {
            root.console.log("✔ Datatable instances nuked!!!");
          }
        }
        // end destroy
        
        // pop intervals (destroys jarviswidget related intervals)
        if ($.navAsAjax && $.intervalArr.length > 0 && (container[0] == $("#content")[0]) && enableJarvisWidgets) {
          
          while ($.intervalArr.length > 0)
            clearInterval($.intervalArr.pop());
          // debugState
          if (debugState) {
            root.console.log("✔ All JarvisWidget intervals cleared");
          }
          
        }
        // end pop intervals
        
        // destroy all widget instances
        if ($.navAsAjax && (container[0] == $("#content")[0]) && enableJarvisWidgets && $("#widget-grid")[0]) {
          
          $("#widget-grid")
            .jarvisWidgets('destroy');
          // debugState
          if (debugState) {
            root.console.log("✔ JarvisWidgets destroyed");
          }
          
        }
        // end destroy all widgets
        
        // cluster destroy: destroy other instances that could be on the page
        // this runs a script in the current loaded page before fetching the new page
        if ($.navAsAjax && (container[0] == $("#content")[0])) {
          
          /*
           * The following elements should be removed, if they have been created:
           *
           *	colorList
           *	icon
           *	picker
           *	inline
           *	And unbind events from elements:
           *
           *	icon
           *	picker
           *	inline
           *	especially $(document).on('mousedown')
           *	It will be much easier to add namespace to plugin events and then unbind using selected namespace.
           *
           *	See also:
           *
           *	http://f6design.com/journal/2012/05/06/a-jquery-plugin-boilerplate/
           *	http://keith-wood.name/pluginFramework.html
           */
          
          // this function is below the pagefunction for all pages that has instances
          
          if (typeof pagedestroy == 'function') {
            
            try {
              pagedestroy();
              
              if (debugState) {
                root.console.log("✔ Pagedestroy()");
              }
            } catch (err) {
              pagedestroy = undefined;
              
              if (debugState) {
                root.console.log("! Pagedestroy() Catch Error");
              }
            }
            
          }
          
          // destroy all inline charts
          
          if ($.fn.sparkline && $("#content .sparkline")[0]) {
            $("#content .sparkline")
              .sparkline('destroy');
            
            if (debugState) {
              root.console.log("✔ Sparkline Charts destroyed!");
            }
          }
          
          if ($.fn.easyPieChart && $("#content .easy-pie-chart")[0]) {
            $("#content .easy-pie-chart")
              .easyPieChart('destroy');
            
            if (debugState) {
              root.console.log("✔ EasyPieChart Charts destroyed!");
            }
          }
          
          
          
          // end destory all inline charts
          
          // destroy form controls: Datepicker, select2, autocomplete, mask, bootstrap slider
          
          if ($.fn.select2 && $("#content select.select2")[0]) {
            $("#content select.select2")
              .select2('destroy');
            
            if (debugState) {
              root.console.log("✔ Select2 destroyed!");
            }
          }
          
          if ($.fn.mask && $('#content [data-mask]')[0]) {
            $('#content [data-mask]')
              .unmask();
            
            if (debugState) {
              root.console.log("✔ Input Mask destroyed!");
            }
          }
          
          if ($.fn.datepicker && $('#content .datepicker')[0]) {
            $('#content .datepicker')
              .off();
            $('#content .datepicker')
              .remove();
            
            if (debugState) {
              root.console.log("✔ Datepicker destroyed!");
            }
          }
          
          if ($.fn.slider && $('#content .slider')[0]) {
            $('#content .slider')
              .off();
            $('#content .slider')
              .remove();
            
            if (debugState) {
              root.console.log("✔ Bootstrap Slider destroyed!");
            }
          }
          
          // end destroy form controls
          
          
        }
        // end cluster destroy
        
        // empty container and var to start garbage collection (frees memory)
        pagefunction = null;
        container.removeData()
          .html("");
        
        // place cog
        container.html('<h1 class="ajax-loading-animation"><i class="fa fa-cog fa-spin"></i> Loading...</h1>');
        
        // Only draw breadcrumb if it is main content material
        if (container[0] == $("#content")[0]) {
          
          // clear everything else except these key DOM elements
          // we do this because sometime plugins will leave dynamic elements behind
          $('body')
            .find('> *')
            .filter(':not(' + ignore_key_elms + ')')
            .empty()
            .remove();
          
          // draw breadcrumb
          drawBreadCrumb();
          
          // scroll up
          $("html")
            .animate({
              scrollTop: 0
            }, "fast");
        }
        // end if
      },
      success: function (data) {
        
        // dump data to container
        container.css({
          opacity: '0.0'
        })
          .html(data)
          .delay(50)
          .animate({
            opacity: '1.0'
          }, 300);
        
        // clear data var
        data = null;
        container = null;
      },
      error: function (xhr, status, thrownError, error) {
        container.html('<h4 class="ajax-loading-error"><i class="fa fa-warning txt-color-orangeDark"></i> Error requesting <span class="txt-color-red">' + url + '</span>: ' + xhr.status + ' <span style="text-transform: capitalize;">' + thrownError + '</span></h4>');
      },
      async: true
    });
    
  }
  /*
   * UPDATE BREADCRUMB
   */
  
  function drawBreadCrumb(opt_breadCrumbs) {
    var a = $("nav li.active > a"),
      b = a.length;
    
    bread_crumb.empty(),
      bread_crumb.append($("<li>Home</li>")), a.each(function () {
      bread_crumb.append($("<li></li>")
        .html($.trim($(this)
          .clone()
          .children(".badge")
          .remove()
          .end()
          .text()))), --b || (document.title = bread_crumb.find("li:last-child")
        .text())
    });
    
    // Push breadcrumb manually -> drawBreadCrumb(["Users", "John Doe"]);
    // Credits: Philip Whitt | philip.whitt@sbcglobal.net
    if (opt_breadCrumbs != undefined) {
      $.each(opt_breadCrumbs, function (index, value) {
        bread_crumb.append($("<li></li>")
          .html(value));
        document.title = bread_crumb.find("li:last-child")
          .text();
      });
    }
  }
  /* ~ END: APP AJAX REQUEST SETUP */
  
  /*
   * PAGE SETUP
   * Description: fire certain scripts that run through the page
   * to check for form elements, tooltip activation, popovers, etc...
   */
  function pageSetUp() {
    
    if (thisDevice === "desktop") {
      // is desktop
      
      // activate tooltips
      $("[rel=tooltip], [data-rel=tooltip]")
        .tooltip();

      // activate popovers
      $("[rel=popover], [data-rel=popover]")
        .popover();
      
      // activate popovers with hover states
      $("[rel=popover-hover], [data-rel=popover-hover]")
        .popover({
          trigger: "hover"
        });
      
      // setup widgets
      setup_widgets_desktop();
      
      // activate inline charts
      runAllCharts();
      
      // run form elements
      runAllForms();
      
    } else {
      
      // is mobile
      
      // activate popovers
      $("[rel=popover], [data-rel=popover]")
        .popover();
      
      // activate popovers with hover states
      $("[rel=popover-hover], [data-rel=popover-hover]")
        .popover({
          trigger: "hover"
        });
      
      // activate inline charts
      runAllCharts();
      
      // setup widgets
      setup_widgets_mobile();
      
      // run form elements
      runAllForms();
      
    }
    
  }
  /* ~ END: PAGE SETUP */
  
  /*
   * ONE POP OVER THEORY
   * Keep only 1 active popover per trigger - also check and hide active popover if user clicks on document
   */
  $('body')
    .on('click', function (e) {
      $('[rel="popover"], [data-rel="popover"]')
        .each(function () {
          //the 'is' for buttons that trigger popups
          //the 'has' for icons within a button that triggers a popup
          if (!$(this)
            .is(e.target) && $(this)
            .has(e.target)
            .length === 0 && $('.popover')
            .has(e.target)
            .length === 0) {
            $(this)
              .popover('hide');
          }
        });
    });
  /* ~ END: ONE POP OVER THEORY */
  
  /*
   * DELETE MODEL DATA ON HIDDEN
   * Clears the model data once it is hidden, this way you do not create duplicated data on multiple modals
   */
  $('body')
    .on('hidden.bs.modal', '.modal', function () {
      $(this)
        .removeData('bs.modal');
    });
  /* ~ END: DELETE MODEL DATA ON HIDDEN */
  
  /*
   * HELPFUL FUNCTIONS
   * We have included some functions below that can be resued on various occasions
   *
   * Get param value
   * example: alert( getParam( 'param' ) );
   */
  function getParam(name) {
    name = name.replace(/[\[]/, "\\\[")
      .replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
      return "";
    else
      return results[1];
  }
  /* ~ END: HELPFUL FUNCTIONS */
  
  /*
   * SMART VOICE
   */
  
  SpeechRecognition = root.SpeechRecognition || root.webkitSpeechRecognition || root.mozSpeechRecognition || root.msSpeechRecognition || root.oSpeechRecognition;

// ref: http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API
  if (SpeechRecognition && voice_command) {
    
    // commands are pulled from app.config file
    
    // add function to button
    $.root_.on('click', '[data-action="voiceCommand"]', function(e) {
      
      if ($.root_.hasClass("voice-command-active")) {
        $.speechApp.stop();
        //$('#speech-btn > span > a > i').removeClass().addClass('fa fa-microphone-slash');
      } else {
        $.speechApp.start();
        //add popover
        $('#speech-btn .popover').fadeIn(350);
        //$('#speech-btn > span > a > i').removeClass().addClass('fa fa-microphone')
        
      }
      
      e.preventDefault();
    });
    
    //remove popover
    $(document).mouseup(function(e) {
      if (!$('#speech-btn .popover').is(e.target) && $('#speech-btn .popover').has(e.target).length === 0) {
        $('#speech-btn .popover').fadeOut(250);
      }
    });
    
    // create dynamic modal instance
    var modal = $('<div class="modal fade" id="voiceModal" tabindex="-1" role="dialog" aria-labelledby="remoteModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"></div></div></div>');
    // attach to body
    modal.appendTo("body");
    
    //debugState
    if (debugState) {
      root.console.log("This browser supports Voice Command");
    }
    
    // function
    $.speechApp = (function(speech) {
      
      speech.start = function() {
        
        // Add our commands to smartSpeechRecognition
        smartSpeechRecognition.addCommands(commands);
        
        if (smartSpeechRecognition) {
          // activate plugin
          smartSpeechRecognition.start();
          // add btn class
          $.root_.addClass("voice-command-active");
          // play sound
          $.speechApp.playON();
          // set localStorage when switch is on manually
          if (voice_localStorage) {
            localStorage.setItem('sm-setautovoice', 'true');
          }
          
        } else {
          // if plugin not found
          alert("speech plugin not loaded");
        }
        
      };
      speech.stop = function() {
        
        if (smartSpeechRecognition) {
          // deactivate plugin
          smartSpeechRecognition.abort();
          // remove btn class
          $.root_.removeClass("voice-command-active");
          // sound
          $.speechApp.playOFF();
          // del localStorage when switch if off manually
          if (voice_localStorage) {
            localStorage.setItem('sm-setautovoice', 'false');
          }
          // remove popover if visible
          if ($('#speech-btn .popover').is(':visible')) {
            $('#speech-btn .popover').fadeOut(250);
          }
        }
        
      };
      
      // play sound
      speech.playON = function() {
        
        var audioElement = document.createElement('audio');
        
        if (navigator.userAgent.match('Firefox/'))
          audioElement.setAttribute('src', $.sound_path + 'voice_on' + ".ogg");
        else
          audioElement.setAttribute('src', $.sound_path + 'voice_on' + ".mp3");
        
        //$.get();
        audioElement.addEventListener("load", function() {
          audioElement.play();
        }, true);
        
        if ($.sound_on) {
          audioElement.pause();
          audioElement.play();
        }
      };
      
      speech.playOFF = function() {
        
        var audioElement = document.createElement('audio');
        
        if (navigator.userAgent.match('Firefox/'))
          audioElement.setAttribute('src', $.sound_path + 'voice_off' + ".ogg");
        else
          audioElement.setAttribute('src', $.sound_path + 'voice_off' + ".mp3");
        
        $.get();
        audioElement.addEventListener("load", function() {
          audioElement.play();
        }, true);
        
        if ($.sound_on) {
          audioElement.pause();
          audioElement.play();
        }
      };
      
      speech.playConfirmation = function() {
        
        var audioElement = document.createElement('audio');
        
        if (navigator.userAgent.match('Firefox/'))
          audioElement.setAttribute('src', $.sound_path + 'voice_alert' + ".ogg");
        else
          audioElement.setAttribute('src', $.sound_path + 'voice_alert' + ".mp3");
        
        $.get();
        audioElement.addEventListener("load", function() {
          audioElement.play();
        }, true);
        
        if ($.sound_on) {
          audioElement.pause();
          audioElement.play();
        }
      };
      
      return speech;
      
    })({});
    
  } else {
    $("#speech-btn").addClass("display-none");
  }
  
  /*
   * SPEECH RECOGNITION ENGINE
   * Copyright (c) 2013 Tal Ater
   * Modified by MyOrange
   * All modifications made are hereby copyright (c) 2014 MyOrange
   */
  
  (function(undefined) {"use strict";
    
    // Check browser support
    // This is done as early as possible, to make it as fast as possible for unsupported browsers
    if (!SpeechRecognition) {
      root.smartSpeechRecognition = null;
      return undefined;
    }
    
    var commandsList = [], recognition, callbacks = {
        start : [],
        error : [],
        end : [],
        result : [],
        resultMatch : [],
        resultNoMatch : [],
        errorNetwork : [],
        errorPermissionBlocked : [],
        errorPermissionDenied : []
      }, autoRestart, lastStartedAt = 0,
      //debugState = false, // decleared in app.config.js
      //debugStyle = 'font-weight: bold; color: #00f;', // decleared in app.config.js
      
      // The command matching code is a modified version of Backbone.Router by Jeremy Ashkenas, under the MIT license.
      optionalParam = /\s*\((.*?)\)\s*/g, optionalRegex = /(\(\?:[^)]+\))\?/g, namedParam = /(\(\?)?:\w+/g, splatParam = /\*\w+/g, escapeRegExp = /[\-{}\[\]+?.,\\\^$|#]/g, commandToRegExp = function(command) {
        command = command.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function(match, optional) {
          return optional ? match : '([^\\s]+)';
        }).replace(splatParam, '(.*?)').replace(optionalRegex, '\\s*$1?\\s*');
        return new RegExp('^' + command + '$', 'i');
      };
    
    // This method receives an array of callbacks to iterate over, and invokes each of them
    var invokeCallbacks = function(callbacks) {
      callbacks.forEach(function(callback) {
        callback.callback.apply(callback.context);
      });
    };
    
    var initIfNeeded = function() {
      if (!isInitialized()) {
        root.smartSpeechRecognition.init({}, false);
      }
    };
    
    var isInitialized = function() {
      return recognition !== undefined;
    };
    
    root.smartSpeechRecognition = {
      // Initialize smartSpeechRecognition with a list of commands to recognize.
      // e.g. smartSpeechRecognition.init({'hello :name': helloFunction})
      // smartSpeechRecognition understands commands with named variables, splats, and optional words.
      init : function(commands, resetCommands) {
        
        // resetCommands defaults to true
        if (resetCommands === undefined) {
          resetCommands = true;
        } else {
          resetCommands = !!resetCommands;
        }
        
        // Abort previous instances of recognition already running
        if (recognition && recognition.abort) {
          recognition.abort();
        }
        
        // initiate SpeechRecognition
        recognition = new SpeechRecognition();
        
        // Set the max number of alternative transcripts to try and match with a command
        recognition.maxAlternatives = 5;
        recognition.continuous = true;
        // Sets the language to the default 'en-US'. This can be changed with smartSpeechRecognition.setLanguage()
        recognition.lang = voice_command_lang || 'en-US';
        
        recognition.onstart = function() {
          invokeCallbacks(callbacks.start);
          //debugState
          if (debugState) {
            root.console.log('%c ✔ SUCCESS: User allowed access the microphone service to start ', debugStyle_success);
            root.console.log('Language setting is set to: ' + recognition.lang, debugStyle);
          }
          $.root_.removeClass("service-not-allowed");
          $.root_.addClass("service-allowed");
        };
        
        recognition.onerror = function(event) {
          invokeCallbacks(callbacks.error);
          switch (event.error) {
            case 'network':
              invokeCallbacks(callbacks.errorNetwork);
              break;
            case 'not-allowed':
            case 'service-not-allowed':
              // if permission to use the mic is denied, turn off auto-restart
              autoRestart = false;
              $.root_.removeClass("service-allowed");
              $.root_.addClass("service-not-allowed");
              //debugState
              if (debugState) {
                root.console.log('%c WARNING: Microphone was not detected (either user denied access or it is not installed properly) ', debugStyle_warning);
              }
              // determine if permission was denied by user or automatically.
              if (new Date().getTime() - lastStartedAt < 200) {
                invokeCallbacks(callbacks.errorPermissionBlocked);
              } else {
                invokeCallbacks(callbacks.errorPermissionDenied);
                //console.log("You need your mic to be active")
              }
              break;
          }
        };
        
        recognition.onend = function() {
          invokeCallbacks(callbacks.end);
          // smartSpeechRecognition will auto restart if it is closed automatically and not by user action.
          if (autoRestart) {
            // play nicely with the browser, and never restart smartSpeechRecognition automatically more than once per second
            var timeSinceLastStart = new Date().getTime() - lastStartedAt;
            if (timeSinceLastStart < 1000) {
              setTimeout(root.smartSpeechRecognition.start, 1000 - timeSinceLastStart);
            } else {
              root.smartSpeechRecognition.start();
            }
          }
        };
        
        recognition.onresult = function(event) {
          invokeCallbacks(callbacks.result);
          
          var results = event.results[event.resultIndex], commandText;
          
          // go over each of the 5 results and alternative results received (we've set maxAlternatives to 5 above)
          for (var i = 0; i < results.length; i++) {
            // the text recognized
            commandText = results[i].transcript.trim();
            if (debugState) {
              root.console.log('Speech recognized: %c' + commandText, debugStyle);
            }
            
            // try and match recognized text to one of the commands on the list
            for (var j = 0, l = commandsList.length; j < l; j++) {
              var result = commandsList[j].command.exec(commandText);
              if (result) {
                var parameters = result.slice(1);
                if (debugState) {
                  root.console.log('command matched: %c' + commandsList[j].originalPhrase, debugStyle);
                  if (parameters.length) {
                    root.console.log('with parameters', parameters);
                  }
                }
                // execute the matched command
                commandsList[j].callback.apply(this, parameters);
                invokeCallbacks(callbacks.resultMatch);
                
                // for commands "sound on", "stop" and "mute" do not play sound or display message
                //var myMatchedCommand = commandsList[j].originalPhrase;
                
                var ignoreCallsFor = ["sound on", "mute", "stop"];
                
                if (ignoreCallsFor.indexOf(commandsList[j].originalPhrase) < 0) {
                  // play sound when match found
                  $.smallBox({
                    title : (commandsList[j].originalPhrase),
                    content : "loading...",
                    color : "#333",
                    sound_file : 'voice_alert',
                    timeout : 2000
                  });
                  
                  if ($('#speech-btn .popover').is(':visible')) {
                    $('#speech-btn .popover').fadeOut(250);
                  }
                }// end if
                
                return true;
              }
            } // end for
          }// end for
          
          invokeCallbacks(callbacks.resultNoMatch);
          //console.log("no match found for: " + commandText)
          $.smallBox({
            title : "Error: <strong>" + ' " ' + commandText + ' " ' + "</strong> no match found!",
            content : "Please speak clearly into the microphone",
            color : "#a90329",
            timeout : 5000,
            icon : "fa fa-microphone"
          });
          if ($('#speech-btn .popover').is(':visible')) {
            $('#speech-btn .popover').fadeOut(250);
          }
          return false;
        };
        
        // build commands list
        if (resetCommands) {
          commandsList = [];
        }
        if (commands.length) {
          this.addCommands(commands);
        }
      },
      
      // Start listening (asking for permission first, if needed).
      // Call this after you've initialized smartSpeechRecognition with commands.
      // Receives an optional options object:
      // { autoRestart: true }
      start : function(options) {
        initIfNeeded();
        options = options || {};
        if (options.autoRestart !== undefined) {
          autoRestart = !!options.autoRestart;
        } else {
          autoRestart = true;
        }
        lastStartedAt = new Date().getTime();
        recognition.start();
      },
      
      // abort the listening session (aka stop)
      abort : function() {
        autoRestart = false;
        if (isInitialized) {
          recognition.abort();
        }
      },
      
      // Turn on output of debug messages to the console. Ugly, but super-handy!
      debug : function(newState) {
        if (arguments.length > 0) {
          debugState = !!newState;
        } else {
          debugState = true;
        }
      },
      
      // Set the language the user will speak in. If not called, defaults to 'en-US'.
      // e.g. 'fr-FR' (French-France), 'es-CR' (Español-Costa Rica)
      setLanguage : function(language) {
        initIfNeeded();
        recognition.lang = language;
      },
      
      // Add additional commands that smartSpeechRecognition will respond to. Similar in syntax to smartSpeechRecognition.init()
      addCommands : function(commands) {
        var cb, command;
        
        initIfNeeded();
        
        for (var phrase in commands) {
          if (commands.hasOwnProperty(phrase)) {
            cb = root[commands[phrase]] || commands[phrase];
            if ( typeof cb !== 'function') {
              continue;
            }
            //convert command to regex
            command = commandToRegExp(phrase);
            
            commandsList.push({
              command : command,
              callback : cb,
              originalPhrase : phrase
            });
          }
        }
        if (debugState) {
          root.console.log('Commands successfully loaded: %c' + commandsList.length, debugStyle);
        }
      },
      
      // Remove existing commands. Called with a single phrase, array of phrases, or methodically. Pass no params to remove all commands.
      removeCommands : function(commandsToRemove) {
        if (commandsToRemove === undefined) {
          commandsList = [];
          return;
        }
        commandsToRemove = Array.isArray(commandsToRemove) ? commandsToRemove : [commandsToRemove];
        commandsList = commandsList.filter(function(command) {
          for (var i = 0; i < commandsToRemove.length; i++) {
            if (commandsToRemove[i] === command.originalPhrase) {
              return false;
            }
          }
          return true;
        });
      },
      
      // Lets the user add a callback of one of 9 types:
      // start, error, end, result, resultMatch, resultNoMatch, errorNetwork, errorPermissionBlocked, errorPermissionDenied
      // Can also optionally receive a context for the callback function as the third argument
      addCallback : function(type, callback, context) {
        if (callbacks[type] === undefined) {
          return;
        }
        var cb = root[callback] || callback;
        if ( typeof cb !== 'function') {
          return;
        }
        callbacks[type].push({
          callback : cb,
          context : context || this
        });
      }
    };
    
  }).call(this);
  
  var autoStart = function() {
    
    smartSpeechRecognition.addCommands(commands);
    
    if (smartSpeechRecognition) {
      // activate plugin
      smartSpeechRecognition.start();
      // add btn class
      $.root_.addClass("voice-command-active");
      // set localStorage when switch is on manually
      if (voice_localStorage) {
        localStorage.setItem('sm-setautovoice', 'true');
      }
      
    } else {
      // if plugin not found
      alert("speech plugin not loaded");
    }
  }
// if already running with localstorage
  if (SpeechRecognition && voice_command && localStorage.getItem('sm-setautovoice') == 'true') {
    autoStart();
  }

// auto start
  if (SpeechRecognition && voice_command_auto && voice_command) {
    autoStart();
  }
  
})(jQuery, Drupal, drupalSettings);