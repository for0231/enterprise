<?php

/* modules/isp/themes/industrial_zymphonies_theme/templates/layout/page.html.twig */
class __TwigTemplate_992ce57a34e63f3e50247734f225f7dfc689e09ea7f767b3b785fe0719290abb extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 74);
        $filters = array("date" => 400);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if'),
                array('date'),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 60
        echo "

<!-- Header and Navbar -->
<header class=\"main-header\">
  <nav class=\"navbar topnav navbar-default\" role=\"navigation\">
    <div class=\"container\">
      <div class=\"row\">
      <div class=\"navbar-header col-md-2\">
        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#main-navigation\">
          <span class=\"sr-only\">Toggle navigation</span>
          <span class=\"icon-bar\"></span>
          <span class=\"icon-bar\"></span>
          <span class=\"icon-bar\"></span>
        </button>
        ";
        // line 74
        if ($this->getAttribute(($context["page"] ?? null), "header", array())) {
            // line 75
            echo "          ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "header", array()), "html", null, true));
            echo "
        ";
        }
        // line 77
        echo "      </div>

      <!-- Navigation -->
      <div class=\"col-md-7\">
        ";
        // line 81
        if ($this->getAttribute(($context["page"] ?? null), "primary_menu", array())) {
            // line 82
            echo "          ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "primary_menu", array()), "html", null, true));
            echo "
        ";
        }
        // line 84
        echo "      </div>
      <!--End Navigation -->

      <!-- Navigation -->
      <div class=\"col-md-3\">
        <!--Search-->
          ";
        // line 90
        if ($this->getAttribute(($context["page"] ?? null), "search", array())) {
            // line 91
            echo "            ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "search", array()), "html", null, true));
            echo "
          ";
        }
        // line 93
        echo "        <!--End Search-->

      </div>
      <!--End Navigation -->

      </div>
    </div>
  </nav>

  <!-- Banner -->
  ";
        // line 103
        if ((($context["is_front"] ?? null) && $this->getAttribute(($context["page"] ?? null), "slideshow", array()))) {
            echo "  
    <div class=\"slideshow\">
      ";
            // line 105
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "slideshow", array()), "html", null, true));
            echo "
    </div>
  ";
        }
        // line 108
        echo "  <!-- End Banner -->

</header>
<!--End Header & Navbar -->


<!--Home page message-->
  ";
        // line 115
        if ((($context["is_front"] ?? null) && $this->getAttribute(($context["page"] ?? null), "homepagemessage", array()))) {
            // line 116
            echo "    <div class=\"container\">
      <div class=\"row\">
        <div class=\"col-md-12\">
          ";
            // line 119
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "homepagemessage", array()), "html", null, true));
            echo "
        </div>
      </div>
    </div>
  ";
        }
        // line 124
        echo "<!--End Highlighted-->


<!--Highlighted-->
  ";
        // line 128
        if ($this->getAttribute(($context["page"] ?? null), "highlighted", array())) {
            // line 129
            echo "    <div class=\"container\">
      <div class=\"row\">
        <div class=\"col-md-12\">
          ";
            // line 132
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "highlighted", array()), "html", null, true));
            echo "
        </div>
      </div>
    </div>
  ";
        }
        // line 137
        echo "<!--End Highlighted-->


<!-- Start Top Widget -->
 
  ";
        // line 142
        if ((($this->getAttribute(($context["page"] ?? null), "topwidget_first", array()) || $this->getAttribute(($context["page"] ?? null), "topwidget_second", array())) || $this->getAttribute(($context["page"] ?? null), "topwidget_third", array()))) {
            // line 143
            echo "    <div class=\"topwidget\">
      <div class=\"container\">
        <div class=\"row\">
      <!-- start: Container -->
      <!-- Top widget first region -->          
          ";
            // line 148
            if ($this->getAttribute(($context["page"] ?? null), "topwidget_first", array())) {
                // line 149
                echo "            <div class = ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["topwidget_class"] ?? null), "html", null, true));
                echo ">
              ";
                // line 150
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "topwidget_first", array()), "html", null, true));
                echo "
            </div>
          ";
            }
            // line 152
            echo "          
          <!-- End top widget third region -->

          <!-- Top widget second region -->          
          ";
            // line 156
            if ($this->getAttribute(($context["page"] ?? null), "topwidget_second", array())) {
                // line 157
                echo "            <div class = ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["topwidget_class"] ?? null), "html", null, true));
                echo ">
              ";
                // line 158
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "topwidget_second", array()), "html", null, true));
                echo "
            </div>
          ";
            }
            // line 160
            echo "          
          <!-- End top widget third region -->
          
          <!-- Top widget third region -->          
          ";
            // line 164
            if ($this->getAttribute(($context["page"] ?? null), "topwidget_third", array())) {
                // line 165
                echo "            <div class = ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["topwidget_third_class"] ?? null), "html", null, true));
                echo ">
              ";
                // line 166
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "topwidget_third", array()), "html", null, true));
                echo "
            </div>
          ";
            }
            // line 168
            echo "          
          <!-- End top widget third region -->
        </div>
      </div>
    </div>
  ";
        }
        // line 174
        echo "
<!--End Top Widget -->


<!-- Page Title -->
";
        // line 179
        if (($this->getAttribute(($context["page"] ?? null), "page_title", array()) &&  !($context["is_front"] ?? null))) {
            // line 180
            echo "  <div id=\"page-title\">
    <div id=\"page-title-inner\">
      <!-- start: Container -->
      <div class=\"container\">
        ";
            // line 184
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "page_title", array()), "html", null, true));
            echo "
      </div>
    </div>
  </div>
";
        }
        // line 189
        echo "<!-- End Page Title ---->


<!-- layout -->
<div id=\"wrapper\">
  <!-- start: Container -->
  <div class=\"container\">
    
    <!--Content top-->
      ";
        // line 198
        if ($this->getAttribute(($context["page"] ?? null), "content_top", array())) {
            // line 199
            echo "        <div class=\"row\">
          ";
            // line 200
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content_top", array()), "html", null, true));
            echo "
        </div>
      ";
        }
        // line 203
        echo "    <!--End Content top-->
    
    <!--start:content -->
    <div class=\"row\">
      <div class=\"col-md-12\">";
        // line 207
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "breadcrumb", array()), "html", null, true));
        echo "</div>
    </div>

    <div class=\"row layout\">
      <!--- Start Left SideBar -->
      ";
        // line 212
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_first", array())) {
            // line 213
            echo "        <div class=\"sidebar\" >
          <div class = ";
            // line 214
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["sidebarfirst"] ?? null), "html", null, true));
            echo " >
            ";
            // line 215
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_first", array()), "html", null, true));
            echo "
          </div>
        </div>
      ";
        }
        // line 219
        echo "      <!---End Right SideBar -->

      <!--- Start content -->
      ";
        // line 222
        if ($this->getAttribute(($context["page"] ?? null), "content", array())) {
            // line 223
            echo "        <div class=\"content_layout\">
          <div class=";
            // line 224
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["contentlayout"] ?? null), "html", null, true));
            echo ">
            ";
            // line 225
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content", array()), "html", null, true));
            echo "
          </div>
        </div>
      ";
        }
        // line 229
        echo "      <!---End content -->

      <!--- Start Right SideBar -->
      ";
        // line 232
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_second", array())) {
            // line 233
            echo "        <div class=\"sidebar\">
          <div class=";
            // line 234
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["sidebarsecond"] ?? null), "html", null, true));
            echo ">
            ";
            // line 235
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_second", array()), "html", null, true));
            echo "
          </div>
        </div>
      ";
        }
        // line 239
        echo "      <!---End Right SideBar -->
      
    </div>
    <!--End Content -->

    <!--Start Content Bottom-->
    ";
        // line 245
        if ($this->getAttribute(($context["page"] ?? null), "content_bottom", array())) {
            // line 246
            echo "      <div class=\"row\">
        ";
            // line 247
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content_bottom", array()), "html", null, true));
            echo "
      </div>
    ";
        }
        // line 250
        echo "    <!--End Content Bottom-->
  </div>
</div>
<!-- End layout -->



<!-- start: Footer -->
";
        // line 258
        if ((($this->getAttribute(($context["page"] ?? null), "footer_first", array()) || $this->getAttribute(($context["page"] ?? null), "footer_second", array())) || $this->getAttribute(($context["page"] ?? null), "footer_third", array()))) {
            // line 259
            echo "  <div class=\"footerwidget\">
    <div class=\"container\">
      
      <div class=\"row\">

        <!-- Start Footer First Region -->
        
        ";
            // line 266
            if ($this->getAttribute(($context["page"] ?? null), "footer_first", array())) {
                // line 267
                echo "          <div class = ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["footer_first_class"] ?? null), "html", null, true));
                echo ">
            ";
                // line 268
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_first", array()), "html", null, true));
                echo "
          </div>
        ";
            }
            // line 271
            echo "        
        <!-- End Footer First Region -->

        <!-- Start Footer Second Region -->
        
        ";
            // line 276
            if ($this->getAttribute(($context["page"] ?? null), "footer_second", array())) {
                // line 277
                echo "          <div class = ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["footer_class"] ?? null), "html", null, true));
                echo ">
            ";
                // line 278
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_second", array()), "html", null, true));
                echo "
          </div>
        ";
            }
            // line 281
            echo "        
        <!-- End Footer Second Region -->

        <!-- Start Footer third Region -->
        
        ";
            // line 286
            if ($this->getAttribute(($context["page"] ?? null), "footer_third", array())) {
                // line 287
                echo "          <div class = ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["footer_class"] ?? null), "html", null, true));
                echo ">
            ";
                // line 288
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_third", array()), "html", null, true));
                echo "
          </div>
        ";
            }
            // line 291
            echo "        
        <!-- End Footer Third Region -->
      </div>
    </div>
  </div>
";
        }
        // line 297
        echo "<!--End Footer -->



<!-- Start bottom -->

  ";
        // line 303
        if ((($this->getAttribute(($context["page"] ?? null), "bottom_first", array()) || $this->getAttribute(($context["page"] ?? null), "bottom_second", array())) || $this->getAttribute(($context["page"] ?? null), "bottom_third", array()))) {
            // line 304
            echo "
    <div class=\"bottom-widgets\">
      <!-- Start Container -->
      <div class=\"container\">
        
        <div class=\"row\">

          <!-- Start Bottom First Region -->
          
          ";
            // line 313
            if ($this->getAttribute(($context["page"] ?? null), "bottom_first", array())) {
                // line 314
                echo "            <div class = ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["bottom_class"] ?? null), "html", null, true));
                echo ">
              ";
                // line 315
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "bottom_first", array()), "html", null, true));
                echo "
            </div>
          ";
            }
            // line 318
            echo "          
          <!-- End Bottom First Region -->

          <!-- Start Bottom Second Region -->
          ";
            // line 322
            if ($this->getAttribute(($context["page"] ?? null), "bottom_second", array())) {
                // line 323
                echo "            <div class = ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["bottom_class"] ?? null), "html", null, true));
                echo ">
              ";
                // line 324
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "bottom_second", array()), "html", null, true));
                echo "
            </div>
          ";
            }
            // line 327
            echo "          
          <!-- End Bottom Second Region -->

          <!-- Start Bottom third Region -->
          
          ";
            // line 332
            if ($this->getAttribute(($context["page"] ?? null), "bottom_third", array())) {
                // line 333
                echo "            <div class = ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["bottom_class"] ?? null), "html", null, true));
                echo ">
              ";
                // line 334
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "bottom_third", array()), "html", null, true));
                echo "
            </div>
          ";
            }
            // line 337
            echo "          
          <!-- End Bottom Third Region -->

          ";
            // line 340
            if ($this->getAttribute(($context["page"] ?? null), "bottom_forth", array())) {
                // line 341
                echo "          <div class = ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["bottom_class"] ?? null), "html", null, true));
                echo ">
            ";
                // line 342
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "bottom_forth", array()), "html", null, true));
                echo "
          </div>
          ";
            }
            // line 345
            echo "
        </div>
      </div>
    </div>

  ";
        }
        // line 351
        echo "
<!--End Bottom -->


<!-- Start Footer Menu -->
";
        // line 356
        if ($this->getAttribute(($context["page"] ?? null), "footer_menu", array())) {
            // line 357
            echo "  <div class=\"footer-menu\">
    <div class=\"container\">
      <div class=\"row\">
        <div class=\"col-sm-6\">
          ";
            // line 361
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_menu", array()), "html", null, true));
            echo "
        </div>
        ";
            // line 363
            if (($context["show_social_icon"] ?? null)) {
                // line 364
                echo "        <div class=\"col-sm-6\">
          <div class=\"social-media\">
            ";
                // line 366
                if (($context["facebook_url"] ?? null)) {
                    // line 367
                    echo "              <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["facebook_url"] ?? null), "html", null, true));
                    echo "\"  class=\"facebook\" target=\"_blank\" ><i class=\"fa fa-facebook\"></i></a>
            ";
                }
                // line 369
                echo "            ";
                if (($context["google_plus_url"] ?? null)) {
                    // line 370
                    echo "              <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["google_plus_url"] ?? null), "html", null, true));
                    echo "\"  class=\"google-plus\" target=\"_blank\" ><i class=\"fa fa-google-plus\"></i></a>
            ";
                }
                // line 372
                echo "            ";
                if (($context["twitter_url"] ?? null)) {
                    // line 373
                    echo "              <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["twitter_url"] ?? null), "html", null, true));
                    echo "\" class=\"twitter\" target=\"_blank\" ><i class=\"fa fa-twitter\"></i></a>
            ";
                }
                // line 375
                echo "            ";
                if (($context["linkedin_url"] ?? null)) {
                    // line 376
                    echo "              <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["linkedin_url"] ?? null), "html", null, true));
                    echo "\" class=\"linkedin\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>
            ";
                }
                // line 378
                echo "            ";
                if (($context["pinterest_url"] ?? null)) {
                    // line 379
                    echo "              <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["pinterest_url"] ?? null), "html", null, true));
                    echo "\" class=\"pinterest\" target=\"_blank\" ><i class=\"fa fa-pinterest\"></i></a>
            ";
                }
                // line 381
                echo "            ";
                if (($context["rss_url"] ?? null)) {
                    // line 382
                    echo "              <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["rss_url"] ?? null), "html", null, true));
                    echo "\" class=\"rss\" target=\"_blank\" ><i class=\"fa fa-rss\"></i></a>
            ";
                }
                // line 384
                echo "          </div>
        </div>
        ";
            }
            // line 387
            echo "      </div>
    </div>
  </div>
";
        }
        // line 391
        echo "<!-- End Footer Menu -->


<div class=\"copyright\">
  <div class=\"container\">
    <div class=\"row\">

      <!-- Copyright -->
      <div class=\"col-sm-6\">
        <p>Copyright © ";
        // line 400
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_date_format_filter($this->env, "now", "Y"), "html", null, true));
        echo ". All rights reserved</p>
      </div>
      <!-- End Copyright -->

      <!-- Credit link -->
      ";
        // line 405
        if (($context["show_credit_link"] ?? null)) {
            // line 406
            echo "        <div class=\"col-sm-6\">
          <p class=\"credit-link\">Designed By <a href=\"http://www.zymphonies.com\" target=\"_blank\">Zymphonies</a></p>
        </div>
      ";
        }
        // line 410
        echo "      <!-- End Credit link -->
      
    </div>
  </div>
</div>


<!-- Google map -->
";
        // line 418
        if ($this->getAttribute(($context["page"] ?? null), "google_map", array())) {
            // line 419
            echo "  <div class=\"google_map\">
    ";
            // line 420
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "google_map", array()), "html", null, true));
            echo "
  </div>
";
        }
        // line 423
        echo "<!-- End Google map -->";
    }

    public function getTemplateName()
    {
        return "modules/isp/themes/industrial_zymphonies_theme/templates/layout/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  695 => 423,  689 => 420,  686 => 419,  684 => 418,  674 => 410,  668 => 406,  666 => 405,  658 => 400,  647 => 391,  641 => 387,  636 => 384,  630 => 382,  627 => 381,  621 => 379,  618 => 378,  612 => 376,  609 => 375,  603 => 373,  600 => 372,  594 => 370,  591 => 369,  585 => 367,  583 => 366,  579 => 364,  577 => 363,  572 => 361,  566 => 357,  564 => 356,  557 => 351,  549 => 345,  543 => 342,  538 => 341,  536 => 340,  531 => 337,  525 => 334,  520 => 333,  518 => 332,  511 => 327,  505 => 324,  500 => 323,  498 => 322,  492 => 318,  486 => 315,  481 => 314,  479 => 313,  468 => 304,  466 => 303,  458 => 297,  450 => 291,  444 => 288,  439 => 287,  437 => 286,  430 => 281,  424 => 278,  419 => 277,  417 => 276,  410 => 271,  404 => 268,  399 => 267,  397 => 266,  388 => 259,  386 => 258,  376 => 250,  370 => 247,  367 => 246,  365 => 245,  357 => 239,  350 => 235,  346 => 234,  343 => 233,  341 => 232,  336 => 229,  329 => 225,  325 => 224,  322 => 223,  320 => 222,  315 => 219,  308 => 215,  304 => 214,  301 => 213,  299 => 212,  291 => 207,  285 => 203,  279 => 200,  276 => 199,  274 => 198,  263 => 189,  255 => 184,  249 => 180,  247 => 179,  240 => 174,  232 => 168,  226 => 166,  221 => 165,  219 => 164,  213 => 160,  207 => 158,  202 => 157,  200 => 156,  194 => 152,  188 => 150,  183 => 149,  181 => 148,  174 => 143,  172 => 142,  165 => 137,  157 => 132,  152 => 129,  150 => 128,  144 => 124,  136 => 119,  131 => 116,  129 => 115,  120 => 108,  114 => 105,  109 => 103,  97 => 93,  91 => 91,  89 => 90,  81 => 84,  75 => 82,  73 => 81,  67 => 77,  61 => 75,  59 => 74,  43 => 60,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{#
/**
 * @file
 * Default theme implementation to display a single page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.html.twig template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - base_path: The base URL path of the Drupal installation. Will usually be
 *   \"/\" unless you have installed Drupal in a sub-directory.
 * - is_front: A flag indicating if the current page is the front page.
 * - logged_in: A flag indicating if the user is registered and signed in.
 * - is_admin: A flag indicating if the user has permission to access
 *   administration pages.
 *
 * Site identity:
 * - front_page: The URL of the front page. Use this instead of base_path when
 *   linking to the front page. This includes the language domain or prefix.
 * - logo: The url of the logo image, as defined in theme settings.
 * - site_name: The name of the site. This is empty when displaying the site
 *   name has been disabled in the theme settings.
 * - site_slogan: The slogan of the site. This is empty when displaying the site
 *   slogan has been disabled in theme settings.
 *
 * Page content (in order of occurrence in the default page.html.twig):
 * - messages: Status and error messages. Should be displayed prominently.
 * - node: Fully loaded node, if there is an automatically-loaded node
 *   associated with the page and the node ID is the second argument in the
 *   page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - page.header: Items for the header region.
 * - page.navigation: Items for the Navigation region.
 * - page.page_title: Used by Current page Title.
 * - page.banner: Items for the banner region.
 * - page.highlighted: Items for the highlighted top  region.
 * - page.content_top: The main content top of the current page.
 * - page.help: Item for the help region.
 * - page.breadcrumb: Item for the Breadcrumb region.
 * - page.content: The main content of the current page.
 * - page.sidebar_first: Items for the first sidebar.
 * - page.sidebar_second: Items for the second sidebar.
 * - page.content_bottom: Items for the bottom in content region.
 * - page.footer_top: Items for the footer top region.
 * - page.footer_first: Items for the footer first region.
 * - page.footer_second: Items for the footer Second region.
 * - page.footer_third: Items for the footer third region.
 * - page.footer_bottom: Items for the footer bottom region.
 *
 * @see template_preprocess_page()
 * @see html.html.twig
 *
 * @ingroup themeable
 */
#}


<!-- Header and Navbar -->
<header class=\"main-header\">
  <nav class=\"navbar topnav navbar-default\" role=\"navigation\">
    <div class=\"container\">
      <div class=\"row\">
      <div class=\"navbar-header col-md-2\">
        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#main-navigation\">
          <span class=\"sr-only\">Toggle navigation</span>
          <span class=\"icon-bar\"></span>
          <span class=\"icon-bar\"></span>
          <span class=\"icon-bar\"></span>
        </button>
        {% if page.header %}
          {{ page.header }}
        {% endif %}
      </div>

      <!-- Navigation -->
      <div class=\"col-md-7\">
        {% if page.primary_menu %}
          {{ page.primary_menu }}
        {% endif %}
      </div>
      <!--End Navigation -->

      <!-- Navigation -->
      <div class=\"col-md-3\">
        <!--Search-->
          {% if page.search %}
            {{ page.search }}
          {% endif %}
        <!--End Search-->

      </div>
      <!--End Navigation -->

      </div>
    </div>
  </nav>

  <!-- Banner -->
  {% if is_front and page.slideshow %}  
    <div class=\"slideshow\">
      {{ page.slideshow }}
    </div>
  {% endif %}
  <!-- End Banner -->

</header>
<!--End Header & Navbar -->


<!--Home page message-->
  {% if is_front and page.homepagemessage %}
    <div class=\"container\">
      <div class=\"row\">
        <div class=\"col-md-12\">
          {{ page.homepagemessage }}
        </div>
      </div>
    </div>
  {% endif %}
<!--End Highlighted-->


<!--Highlighted-->
  {% if page.highlighted %}
    <div class=\"container\">
      <div class=\"row\">
        <div class=\"col-md-12\">
          {{ page.highlighted }}
        </div>
      </div>
    </div>
  {% endif %}
<!--End Highlighted-->


<!-- Start Top Widget -->
 
  {% if page.topwidget_first or page.topwidget_second or page.topwidget_third %}
    <div class=\"topwidget\">
      <div class=\"container\">
        <div class=\"row\">
      <!-- start: Container -->
      <!-- Top widget first region -->          
          {% if page.topwidget_first %}
            <div class = {{ topwidget_class }}>
              {{ page.topwidget_first }}
            </div>
          {% endif %}          
          <!-- End top widget third region -->

          <!-- Top widget second region -->          
          {% if page.topwidget_second %}
            <div class = {{ topwidget_class }}>
              {{ page.topwidget_second }}
            </div>
          {% endif %}          
          <!-- End top widget third region -->
          
          <!-- Top widget third region -->          
          {% if page.topwidget_third %}
            <div class = {{ topwidget_third_class }}>
              {{ page.topwidget_third }}
            </div>
          {% endif %}          
          <!-- End top widget third region -->
        </div>
      </div>
    </div>
  {% endif %}

<!--End Top Widget -->


<!-- Page Title -->
{%  if page.page_title and not is_front %}
  <div id=\"page-title\">
    <div id=\"page-title-inner\">
      <!-- start: Container -->
      <div class=\"container\">
        {{ page.page_title }}
      </div>
    </div>
  </div>
{% endif %}
<!-- End Page Title ---->


<!-- layout -->
<div id=\"wrapper\">
  <!-- start: Container -->
  <div class=\"container\">
    
    <!--Content top-->
      {% if page.content_top %}
        <div class=\"row\">
          {{ page.content_top }}
        </div>
      {% endif %}
    <!--End Content top-->
    
    <!--start:content -->
    <div class=\"row\">
      <div class=\"col-md-12\">{{ page.breadcrumb }}</div>
    </div>

    <div class=\"row layout\">
      <!--- Start Left SideBar -->
      {% if page.sidebar_first %}
        <div class=\"sidebar\" >
          <div class = {{sidebarfirst}} >
            {{ page.sidebar_first }}
          </div>
        </div>
      {% endif %}
      <!---End Right SideBar -->

      <!--- Start content -->
      {% if page.content %}
        <div class=\"content_layout\">
          <div class={{contentlayout}}>
            {{ page.content }}
          </div>
        </div>
      {% endif %}
      <!---End content -->

      <!--- Start Right SideBar -->
      {% if page.sidebar_second %}
        <div class=\"sidebar\">
          <div class={{sidebarsecond}}>
            {{ page.sidebar_second }}
          </div>
        </div>
      {% endif %}
      <!---End Right SideBar -->
      
    </div>
    <!--End Content -->

    <!--Start Content Bottom-->
    {% if page.content_bottom %}
      <div class=\"row\">
        {{ page.content_bottom }}
      </div>
    {% endif %}
    <!--End Content Bottom-->
  </div>
</div>
<!-- End layout -->



<!-- start: Footer -->
{% if page.footer_first or page.footer_second or page.footer_third %}
  <div class=\"footerwidget\">
    <div class=\"container\">
      
      <div class=\"row\">

        <!-- Start Footer First Region -->
        
        {% if page.footer_first %}
          <div class = {{ footer_first_class }}>
            {{ page.footer_first }}
          </div>
        {% endif %}
        
        <!-- End Footer First Region -->

        <!-- Start Footer Second Region -->
        
        {% if page.footer_second %}
          <div class = {{ footer_class }}>
            {{ page.footer_second }}
          </div>
        {% endif %}
        
        <!-- End Footer Second Region -->

        <!-- Start Footer third Region -->
        
        {% if page.footer_third %}
          <div class = {{ footer_class }}>
            {{ page.footer_third }}
          </div>
        {% endif %}
        
        <!-- End Footer Third Region -->
      </div>
    </div>
  </div>
{% endif %}
<!--End Footer -->



<!-- Start bottom -->

  {% if page.bottom_first or page.bottom_second or page.bottom_third %}

    <div class=\"bottom-widgets\">
      <!-- Start Container -->
      <div class=\"container\">
        
        <div class=\"row\">

          <!-- Start Bottom First Region -->
          
          {% if page.bottom_first %}
            <div class = {{ bottom_class }}>
              {{ page.bottom_first }}
            </div>
          {% endif %}
          
          <!-- End Bottom First Region -->

          <!-- Start Bottom Second Region -->
          {% if page.bottom_second %}
            <div class = {{ bottom_class }}>
              {{ page.bottom_second }}
            </div>
          {% endif %}
          
          <!-- End Bottom Second Region -->

          <!-- Start Bottom third Region -->
          
          {% if page.bottom_third %}
            <div class = {{ bottom_class }}>
              {{ page.bottom_third }}
            </div>
          {% endif %}
          
          <!-- End Bottom Third Region -->

          {% if page.bottom_forth %}
          <div class = {{ bottom_class }}>
            {{ page.bottom_forth }}
          </div>
          {% endif %}

        </div>
      </div>
    </div>

  {% endif %}

<!--End Bottom -->


<!-- Start Footer Menu -->
{% if page.footer_menu %}
  <div class=\"footer-menu\">
    <div class=\"container\">
      <div class=\"row\">
        <div class=\"col-sm-6\">
          {{ page.footer_menu }}
        </div>
        {% if show_social_icon %}
        <div class=\"col-sm-6\">
          <div class=\"social-media\">
            {% if facebook_url %}
              <a href=\"{{ facebook_url }}\"  class=\"facebook\" target=\"_blank\" ><i class=\"fa fa-facebook\"></i></a>
            {% endif %}
            {% if google_plus_url %}
              <a href=\"{{ google_plus_url }}\"  class=\"google-plus\" target=\"_blank\" ><i class=\"fa fa-google-plus\"></i></a>
            {% endif %}
            {% if twitter_url %}
              <a href=\"{{ twitter_url }}\" class=\"twitter\" target=\"_blank\" ><i class=\"fa fa-twitter\"></i></a>
            {% endif %}
            {% if linkedin_url %}
              <a href=\"{{ linkedin_url }}\" class=\"linkedin\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>
            {% endif %}
            {% if pinterest_url %}
              <a href=\"{{ pinterest_url }}\" class=\"pinterest\" target=\"_blank\" ><i class=\"fa fa-pinterest\"></i></a>
            {% endif %}
            {% if rss_url %}
              <a href=\"{{ rss_url }}\" class=\"rss\" target=\"_blank\" ><i class=\"fa fa-rss\"></i></a>
            {% endif %}
          </div>
        </div>
        {% endif %}
      </div>
    </div>
  </div>
{% endif %}
<!-- End Footer Menu -->


<div class=\"copyright\">
  <div class=\"container\">
    <div class=\"row\">

      <!-- Copyright -->
      <div class=\"col-sm-6\">
        <p>Copyright © {{ \"now\"|date(\"Y\") }}. All rights reserved</p>
      </div>
      <!-- End Copyright -->

      <!-- Credit link -->
      {% if show_credit_link %}
        <div class=\"col-sm-6\">
          <p class=\"credit-link\">Designed By <a href=\"http://www.zymphonies.com\" target=\"_blank\">Zymphonies</a></p>
        </div>
      {% endif %}
      <!-- End Credit link -->
      
    </div>
  </div>
</div>


<!-- Google map -->
{% if page.google_map %}
  <div class=\"google_map\">
    {{ page.google_map }}
  </div>
{% endif %}
<!-- End Google map -->", "modules/isp/themes/industrial_zymphonies_theme/templates/layout/page.html.twig", "/Users/nie/projects/drupal/modules/isp/themes/industrial_zymphonies_theme/templates/layout/page.html.twig");
    }
}
