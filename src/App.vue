<template>
  <div id="app">

    <div id="page-loader"></div>

    <div id="page-container" class="side-scroll main-content-boxed" :class="{ 'sidebar-o': isHeaderMenuShowed, 'page-header-inverse': isHeaderInversedShowed, 'page-header-fixed': isHeaderFixedShowed, 'page-header-glass': isHeaderGlassShowed }">
        <!-- Side Overlay-->
        <aside id="side-overlay">
            <!-- Side Overlay Scroll Container -->
            <div id="side-overlay-scroll">
                <!-- Side Header -->
                <div class="content-header content-header-fullrow">
                    <div class="content-header-section align-parent">
                        <!-- Close Side Overlay -->
                        <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
                        <button type="button" class="btn btn-circle btn-dual-secondary align-v-r" data-toggle="layout" data-action="side_overlay_close">
                            <i class="fa fa-times text-danger"></i>
                        </button>
                        <!-- END Close Side Overlay -->

                        <!-- User Info -->
                        <div class="content-header-item">
                            <a class="img-link mr-5" href="start_backend.html">
                                <img class="img-avatar img-avatar32" src="static/assets/img/avatars/avatar0.jpg" alt="">
                            </a>
                            <a class="align-middle link-effect text-primary-dark font-w600" href="start_backend.html">Admin</a>
                        </div>
                        <!-- END User Info -->
                    </div>
                </div>
                <!-- END Side Header -->

                <!-- Side Content -->
                <div class="content-side">
                    <!-- Search -->
                    <div class="block pull-t pull-r-l">
                        <div class="block-content block-content-full block-content-sm bg-body-light">
                            <form action="start_backend.html" method="post">
                                <div class="input-group">
                                    <input type="text" class="form-control" id="side-overlay-search" name="side-overlay-search" placeholder="Search..">
                                    <span class="input-group-btn">
                                        <button type="submit" class="btn btn-secondary px-10">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- END Search -->

                    <!-- Mini Stats -->
                    <div class="block pull-r-l">
                        <div class="block-content block-content-full block-content-sm bg-body-light">
                            <div class="row">
                                <div class="col-4">
                                    <div class="font-size-sm font-w600 text-uppercase text-muted">Stat</div>
                                    <div class="font-size-h4">100</div>
                                </div>
                                <div class="col-4">
                                    <div class="font-size-sm font-w600 text-uppercase text-muted">Stat</div>
                                    <div class="font-size-h4">200</div>
                                </div>
                                <div class="col-4">
                                    <div class="font-size-sm font-w600 text-uppercase text-muted">Stat</div>
                                    <div class="font-size-h4">300</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END Mini Stats -->

                    <!-- Block -->
                    <div class="block pull-r-l">
                        <div class="block-header bg-body-light">
                            <h3 class="block-title">Title</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                    <i class="si si-refresh"></i>
                                </button>
                                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                            </div>
                        </div>
                        <div class="block-content">
                            <p>Content...</p>
                        </div>
                    </div>
                    <!-- END Block -->
                </div>
                <!-- END Side Content -->
            </div>
            <!-- END Side Overlay Scroll Container -->
        </aside>
        <!-- END Side Overlay -->

        <!-- Sidebar -->
        <!--
            Helper classes

            Adding .sidebar-mini-hide to an element will make it invisible (opacity: 0) when the sidebar is in mini mode
            Adding .sidebar-mini-show to an element will make it visible (opacity: 1) when the sidebar is in mini mode
                If you would like to disable the transition, just add the .sidebar-mini-notrans along with one of the previous 2 classes

            Adding .sidebar-mini-hidden to an element will hide it when the sidebar is in mini mode
            Adding .sidebar-mini-visible to an element will show it only when the sidebar is in mini mode
                - use .sidebar-mini-visible-b if you would like to be a block when visible (display: block)
        -->
        <nav id="sidebar">
            <!-- Sidebar Scroll Container -->
            <div id="sidebar-scroll">
                <!-- Sidebar Content -->
                <div class="sidebar-content">
                    <!-- Side Header -->
                    <div class="content-header content-header-fullrow px-15">
                        <!-- Mini Mode -->
                        <div class="content-header-section sidebar-mini-visible-b">
                            <!-- Logo -->
                            <span class="content-header-item font-w700 font-size-xl float-left animated fadeIn">
                                <span class="text-dual-primary-dark">c</span><span class="text-primary">b</span>
                            </span>
                            <!-- END Logo -->
                        </div>
                        <!-- END Mini Mode -->

                        <!-- Normal Mode -->
                        <div class="content-header-section text-center align-parent sidebar-mini-hidden">
                            <!-- Close Sidebar, Visible only on mobile screens -->
                            <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
                            <button type="button" class="btn btn-circle btn-dual-secondary d-lg-none align-v-r" data-toggle="layout" data-action="sidebar_close">
                                <i class="fa fa-times text-danger"></i>
                            </button>
                            <!-- END Close Sidebar -->

                            <!-- Logo -->
                            <div class="content-header-item">
                                <router-link :to="{ name: 'welcome' }" class="link-effect font-w700">
                                    <svg width="18" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512; fill: #42a5f5;" xml:space="preserve">
                                        <g>
                                        	<g>
                                        		<path d="M398.821,358.717c-0.823-4.06-4.779-6.679-8.842-5.858c-4.059,0.824-6.682,4.783-5.857,8.843
                                        			c0.433,2.131,0.652,4.326,0.652,6.523c0,17.965-14.616,32.581-32.581,32.581c-17.965,0-32.581-14.616-32.581-32.581
                                        			c0-17.965,14.616-32.581,32.581-32.581c4.533,0,8.917,0.911,13.029,2.708c3.796,1.657,8.217-0.075,9.875-3.871
                                        			c1.658-3.796-0.075-8.217-3.871-9.875c-6.018-2.628-12.421-3.961-19.034-3.961c-26.236,0-47.581,21.345-47.581,47.581
                                        			c0,26.236,21.345,47.581,47.581,47.581c26.236,0,47.581-21.345,47.581-47.581C399.773,365.028,399.453,361.829,398.821,358.717z"
                                        			/>
                                        	</g>
                                        </g>
                                        <g>
                                        	<g>
                                        		<path d="M182.387,262.526c-0.823-4.061-4.784-6.684-8.841-5.861c-4.06,0.824-6.683,4.782-5.859,8.841
                                        			c0.433,2.133,0.652,4.329,0.652,6.526c0,17.965-14.616,32.581-32.581,32.581c-17.965,0-32.581-14.616-32.581-32.581
                                        			c0-17.965,14.616-32.581,32.581-32.581c4.533,0,8.916,0.911,13.028,2.708c3.796,1.658,8.217-0.075,9.875-3.871
                                        			c1.658-3.796-0.075-8.217-3.871-9.875c-6.018-2.628-12.421-3.961-19.033-3.961c-26.236,0-47.581,21.345-47.581,47.581
                                        			s21.345,47.581,47.581,47.581c26.236,0,47.581-21.345,47.581-47.581C183.338,268.837,183.018,265.638,182.387,262.526z"/>
                                        	</g>
                                        </g>
                                        <g>
                                        	<g>
                                        		<path d="M320.129,232.467c-4.142,0-7.5,3.358-7.5,7.5c0,9.125-7.423,16.548-16.548,16.548s-16.548-7.423-16.548-16.548
                                        			s7.423-16.548,16.548-16.548c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5c-17.396,0-31.548,14.152-31.548,31.548
                                        			s14.152,31.548,31.548,31.548s31.548-14.152,31.548-31.548C327.629,235.825,324.271,232.467,320.129,232.467z"/>
                                        	</g>
                                        </g>
                                        <g>
                                        	<g>
                                        		<path d="M416.323,232.467c-12.976,0-23.532,10.557-23.532,23.532c0,12.975,10.557,23.532,23.532,23.532
                                        			c12.975,0,23.532-10.557,23.532-23.532C439.855,243.024,429.298,232.467,416.323,232.467z M416.323,264.532
                                        			c-4.705,0-8.532-3.828-8.532-8.532c0-4.704,3.828-8.532,8.532-8.532c4.704,0,8.532,3.828,8.532,8.532
                                        			C424.855,260.704,421.027,264.532,416.323,264.532z"/>
                                        	</g>
                                        </g>
                                        <g>
                                        	<g>
                                        		<path d="M87.661,360.725c-17.396,0-31.548,14.153-31.548,31.549c0,17.396,14.152,31.548,31.548,31.548
                                        			s31.548-14.152,31.548-31.548S105.057,360.725,87.661,360.725z M87.661,408.822c-9.125,0-16.548-7.423-16.548-16.548
                                        			s7.423-16.549,16.548-16.549s16.548,7.424,16.548,16.549S96.786,408.822,87.661,408.822z"/>
                                        	</g>
                                        </g>
                                        <g>
                                        	<g>
                                        		<path d="M207.903,344.693c-12.976,0-23.532,10.557-23.532,23.532c0,12.976,10.557,23.533,23.532,23.533
                                        			s23.532-10.557,23.532-23.533C231.436,355.25,220.879,344.693,207.903,344.693z M207.903,376.758
                                        			c-4.705,0-8.532-3.828-8.532-8.533c0-4.705,3.828-8.532,8.532-8.532s8.532,3.828,8.532,8.532
                                        			C216.436,372.93,212.608,376.758,207.903,376.758z"/>
                                        	</g>
                                        </g>
                                        <g>
                                        	<g>
                                        		<path d="M499.399,320.141c7.419-1.564,12.601-7.816,12.601-15.204V175.839c0-2.993-1.757-5.568-4.292-6.772l0.003-0.006
                                        			L256.264,49.952c-16.364-7.701-34.711-10.999-53.061-9.531c-82.806,6.611-131.609,41.58-157.968,69.75
                                        			C11.847,145.853,0,185.12,0,207.903v224.452c0,21.816,17.749,39.564,39.564,39.564h163.117c6.543,0,12.396-4.14,14.564-10.302
                                        			c4.58-13.017,16.933-21.762,30.738-21.762c13.805,0,26.157,8.746,30.738,21.762c2.168,6.162,8.021,10.302,14.564,10.302h203.198
                                        			c8.556,0,15.516-6.96,15.516-15.516v-72.987c0-7.387-5.182-13.639-12.601-15.204c-11.278-2.377-19.464-12.486-19.464-24.036
                                        			C479.934,332.626,488.121,322.519,499.399,320.141z M496.305,382.89c0.342,0.072,0.695,0.289,0.695,0.526v72.987
                                        			c0,0.285-0.231,0.516-0.516,0.516H293.286c-0.192,0-0.355-0.11-0.415-0.281c-6.689-19.011-24.728-31.784-44.887-31.784
                                        			c-20.16,0-38.198,12.773-44.887,31.784c-0.06,0.17-0.223,0.281-0.415,0.281H39.564C26.02,456.919,15,445.9,15,432.355V207.903
                                        			c0-13.545,11.02-24.564,24.564-24.564h352.709c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H39.564
                                        			c-5.93,0-11.554,1.32-16.608,3.668c7.889-19.385,20.592-38.078,33.231-51.586c24.549-26.236,70.189-58.817,148.21-65.047
                                        			c15.748-1.258,31.476,1.561,45.462,8.143l221.289,104.822h-46.813c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5H497
                                        			v121.599c0,0.238-0.353,0.454-0.695,0.526c-18.176,3.833-31.369,20.114-31.369,38.713S478.128,379.058,496.305,382.89z"/>
                                        	</g>
                                        </g>
                                    </svg>
                                    <span class="font-size-xl text-dual-primary-dark">Cheesy</span><span class="font-size-xl text-primary">Airlines</span>
                                </router-link>
                            </div>
                            <!-- END Logo -->
                        </div>
                        <!-- END Normal Mode -->
                    </div>
                    <!-- END Side Header -->

                    <!-- Side User -->
                    <div class="content-side content-side-full content-side-user px-10 align-parent">
                        <!-- Visible only in mini mode -->
                        <div class="sidebar-mini-visible-b align-v animated fadeIn">
                            <img class="img-avatar img-avatar32" src="static/assets/img/avatars/avatar0.jpg" alt="">
                        </div>
                        <!-- END Visible only in mini mode -->

                        <!-- Visible only in normal mode -->
                        <div class="sidebar-mini-hidden-b text-center">
                            <a class="img-link" href="start_backend.html">
                                <img class="img-avatar" src="static/assets/img/avatars/avatar0.jpg" alt="">
                            </a>
                            <ul class="list-inline mt-10">
                                <li class="list-inline-item">
                                    <a class="link-effect text-dual-primary-dark font-size-xs font-w600 text-uppercase" href="start_backend.html">J. Smith</a>
                                </li>
                                <li class="list-inline-item">
                                    <!-- Layout API, functionality initialized in Codebase() -> uiApiLayout() -->
                                    <a class="link-effect text-dual-primary-dark" data-toggle="layout" data-action="sidebar_style_inverse_toggle" href="javascript:void(0)">
                                        <i class="si si-drop"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="link-effect text-dual-primary-dark" href="start_backend.html">
                                        <i class="si si-logout"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- END Visible only in normal mode -->
                    </div>
                    <!-- END Side User -->

                    <!-- Side Navigation -->
                    <div class="content-side content-side-full">
                        <ul class="nav-main">
                            <li>
                                <a class="active" href="start_backend.html">
                                    <i class="si si-cup"></i>
                                    <span class="sidebar-mini-hide">Dashboard</span>
                                </a>
                            </li>
                            <li class="nav-main-heading">
                                <span class="sidebar-mini-visible">HD</span>
                                <span class="sidebar-mini-hidden">Heading</span>
                            </li>
                            <li>
                                <a class="nav-submenu" data-toggle="nav-submenu" href="#">
                                    <i class="si si-puzzle"></i>
                                    <span class="sidebar-mini-hide">Dropdown</span>
                                </a>
                                <ul>
                                    <li>
                                        <router-link :to="{ name: 'welcome'}">Go Home</router-link>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Link #2</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <!-- END Side Navigation -->
                </div>
                <!-- Sidebar Content -->
            </div>
            <!-- END Sidebar Scroll Container -->
        </nav>
        <!-- END Sidebar -->

        <page-header />

        <!-- Main Container -->
        <main id="main-container">
            <!-- Page Content -->
            <router-view></router-view>
            <!-- END Page Content -->
        </main>
        <!-- END Main Container -->

        <page-footer />

        <modals />
    </div>

  </div>
</template>

<script>
import PageHeader from '@/components/template/PageHeader'
import PageFooter from '@/components/template/PageFooter'
import Modals from '@/components/template/Modals'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: mapGetters(['isHeaderMenuShowed', 'isHeaderInversedShowed', 'isHeaderFixedShowed', 'isHeaderGlassShowed']),
  components: { PageHeader, PageFooter, Modals },
  mounted () {
    this.$store.dispatch('logout')
  }
}
</script>

<style lang="scss">
  @import "src/assets/css/base";
</style>
