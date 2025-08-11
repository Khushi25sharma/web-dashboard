// View Management
const views = {
    dashboard: {
        title: 'Analytics Overview',
        content: `
            <!-- KPIs -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div class="card p-6">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-sm text-secondary">Total Revenue</p>
                            <h3 class="text-2xl font-bold">$845,623</h3>
                            <p class="success text-sm">+12.5% <span class="text-secondary">from last month</span></p>
                        </div>
                        <div class="bg-secondary rounded-full p-3">
                            <svg class="w-6 h-6 success" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <div class="card p-6">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-sm text-secondary">Active Users</p>
                            <h3 class="text-2xl font-bold">24,589</h3>
                            <p class="success text-sm">+8.2% <span class="text-secondary">from last month</span></p>
                        </div>
                        <div class="bg-secondary rounded-full p-3">
                            <svg class="w-6 h-6 success" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <div class="card p-6">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-sm text-secondary">Conversion Rate</p>
                            <h3 class="text-2xl font-bold">8.42%</h3>
                            <p class="danger text-sm">-1.3% <span class="text-secondary">from last month</span></p>
                        </div>
                        <div class="bg-secondary rounded-full p-3">
                            <svg class="w-6 h-6 warning" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <div class="card p-6">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-sm text-secondary">Avg. Order Value</p>
                            <h3 class="text-2xl font-bold">$94.32</h3>
                            <p class="success text-sm">+3.7% <span class="text-secondary">from last month</span></p>
                        </div>
                        <div class="bg-secondary rounded-full p-3">
                            <svg class="w-6 h-6 success" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V4z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Charts Row 1 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div class="card p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-medium">Revenue Trends</h3>
                        <div class="flex space-x-2">
                            <button class="text-sm px-3 py-1 rounded accent-primary">Monthly</button>
                            <button class="text-sm px-3 py-1 rounded bg-secondary">Weekly</button>
                            <button class="text-sm px-3 py-1 rounded bg-secondary">Daily</button>
                        </div>
                    </div>
                    <div class="chart-container">
                        <canvas id="revenueChart"></canvas>
                    </div>
                </div>
                
                <div class="card p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-medium">User Acquisition</h3>
                        <div>
                            <select class="text-sm px-3 py-1 rounded bg-secondary border border-theme">
                                <option>Last 6 months</option>
                                <option>Last 12 months</option>
                                <option>Last 2 years</option>
                            </select>
                        </div>
                    </div>
                    <div class="chart-container">
                        <div id="acquisitionChart"></div>
                    </div>
                </div>
            </div>
            
            <!-- Charts Row 2 -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div class="card p-6">
                    <h3 class="text-lg font-medium mb-4">Traffic Sources</h3>
                    <div class="chart-container">
                        <canvas id="trafficChart"></canvas>
                    </div>
                </div>
                
                <div class="card p-6 lg:col-span-2">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-medium">Retention Analysis</h3>
                        <button class="text-sm px-3 py-1 rounded bg-secondary">
                            <svg class="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                            Export
                        </button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="min-w-full">
                            <thead>
                                <tr>
                                    <th class="py-2 px-4 text-left border-b border-theme">Cohort</th>
                                    <th class="py-2 px-4 text-center border-b border-theme">Users</th>
                                    <th class="py-2 px-4 text-center border-b border-theme">Month 1</th>
                                    <th class="py-2 px-4 text-center border-b border-theme">Month 2</th>
                                    <th class="py-2 px-4 text-center border-b border-theme">Month 3</th>
                                    <th class="py-2 px-4 text-center border-b border-theme">Month 4</th>
                                    <th class="py-2 px-4 text-center border-b border-theme">Month 5</th>
                                    <th class="py-2 px-4 text-center border-b border-theme">Month 6</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="py-2 px-4 border-b border-theme">Jan 2025</td>
                                    <td class="py-2 px-4 text-center border-b border-theme">2,854</td>
                                    <td class="py-2 px-4 text-center border-b border-theme bg-blue-100 dark:bg-blue-900">100%</td>
                                    <td class="py-2 px-4 text-center border-b border-theme bg-blue-100 dark:bg-blue-900">88.8%</td>
                                    <td class="py-2 px-4 text-center border-b border-theme bg-blue-100 dark:bg-blue-900">79.5%</td>
                                    <td class="py-2 px-4 text-center border-b border-theme bg-blue-100 dark:bg-blue-900">74.2%</td>
                                    <td class="py-2 px-4 text-center border-b border-theme bg-blue-100 dark:bg-blue-900">68.2%</td>
                                    <td class="py-2 px-4 text-center border-b border-theme bg-blue-100 dark:bg-blue-900">65.4%</td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-4 border-b border-theme">Feb 2025</td>
                                    <td class="py-2 px-4 text-center border-b border-theme">2,960</td>
                                    <td class="py-2 px-4 text-center border-b border-theme bg-blue-100 dark:bg-blue-900">100%</td>
                                    <td class="py-2 px-4 text-center border-b border-theme bg-blue-100 dark:bg-blue-900">89.2%</td>
                                    <td class="py-2 px-4 text-center border-b border-theme bg-blue-100 dark:bg-blue-900">80.6%</td>
                                    <td class="py-2 px-4 text-center border-b border-theme bg-blue-100 dark:bg-blue-900">72.1%</td>
                                    <td class="py-2 px-4 text-center border-b border-theme bg-blue-100 dark:bg-blue-900">65.3%</td>
                                    <td class="py-2 px-4 text-center border-b border-theme">&mdash;</td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-4 border-b border-theme">Mar 2025</td>
                                    <td class="py-2 px-4 text-center border-b border-theme">3,012</td>
                                    <td class="py-2 px-4 text-center border-b border-theme bg-blue-100 dark:bg-blue-900">100%</td>
                                    <td class="py-2 px-4 text-center border-b border-theme bg-blue-100 dark:bg-blue-900">90.1%</td>
                                    <td class="py-2 px-4 text-center border-b border-theme bg-blue-100 dark:bg-blue-900">81.2%</td>
                                    <td class="py-2 px-4 text-center border-b border-theme">&mdash;</td>
                                    <td class="py-2 px-4 text-center border-b border-theme">&mdash;</td>
                                    <td class="py-2 px-4 text-center border-b border-theme">&mdash;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `
    },
    reports: {
        title: 'Reports Overview',
        content: `
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div class="card p-6">
                    <h3 class="text-lg font-medium mb-4">Monthly Reports</h3>
                    <div class="space-y-4">
                        <div class="flex justify-between items-center p-3 bg-secondary rounded">
                            <div>
                                <p class="font-medium">Q1 2025 Report</p>
                                <p class="text-sm text-secondary">Generated on March 31, 2025</p>
                            </div>
                            <button class="accent-primary px-3 py-1 rounded text-sm">Download</button>
                        </div>
                        <div class="flex justify-between items-center p-3 bg-secondary rounded">
                            <div>
                                <p class="font-medium">February 2025 Report</p>
                                <p class="text-sm text-secondary">Generated on February 28, 2025</p>
                            </div>
                            <button class="accent-primary px-3 py-1 rounded text-sm">Download</button>
                        </div>
                        <div class="flex justify-between items-center p-3 bg-secondary rounded">
                            <div>
                                <p class="font-medium">January 2025 Report</p>
                                <p class="text-sm text-secondary">Generated on January 31, 2025</p>
                            </div>
                            <button class="accent-primary px-3 py-1 rounded text-sm">Download</button>
                        </div>
                    </div>
                </div>
                <div class="card p-6">
                    <h3 class="text-lg font-medium mb-4">Custom Reports</h3>
                    <form class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Report Type</label>
                            <select class="w-full p-2 rounded bg-secondary border border-theme">
                                <option>Revenue Analysis</option>
                                <option>User Growth</option>
                                <option>Conversion Metrics</option>
                                <option>Custom Metrics</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Date Range</label>
                            <div class="grid grid-cols-2 gap-4">
                                <input type="date" class="p-2 rounded bg-secondary border border-theme">
                                <input type="date" class="p-2 rounded bg-secondary border border-theme">
                            </div>
                        </div>
                        <button type="submit" class="accent-primary px-4 py-2 rounded w-full">Generate Report</button>
                    </form>
                </div>
            </div>
        `
    },
    analytics: {
        title: 'Analytics Dashboard',
        content: `
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div class="card p-6">
                    <h3 class="text-lg font-medium mb-4">Page Views</h3>
                    <div class="chart-container">
                        <canvas id="pageViewsChart"></canvas>
                    </div>
                </div>
                <div class="card p-6">
                    <h3 class="text-lg font-medium mb-4">User Behavior</h3>
                    <div class="chart-container">
                        <canvas id="userBehaviorChart"></canvas>
                    </div>
                </div>
            </div>
            <div class="card p-6">
                <h3 class="text-lg font-medium mb-4">Top Pages</h3>
                <div class="overflow-x-auto">
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 text-left border-b border-theme">Page</th>
                                <th class="py-2 px-4 text-center border-b border-theme">Views</th>
                                <th class="py-2 px-4 text-center border-b border-theme">Avg. Time</th>
                                <th class="py-2 px-4 text-center border-b border-theme">Bounce Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-2 px-4 border-b border-theme">Homepage</td>
                                <td class="py-2 px-4 text-center border-b border-theme">45,892</td>
                                <td class="py-2 px-4 text-center border-b border-theme">2m 34s</td>
                                <td class="py-2 px-4 text-center border-b border-theme">32%</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-theme">Products</td>
                                <td class="py-2 px-4 text-center border-b border-theme">32,145</td>
                                <td class="py-2 px-4 text-center border-b border-theme">3m 12s</td>
                                <td class="py-2 px-4 text-center border-b border-theme">28%</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-theme">Blog</td>
                                <td class="py-2 px-4 text-center border-b border-theme">28,934</td>
                                <td class="py-2 px-4 text-center border-b border-theme">4m 05s</td>
                                <td class="py-2 px-4 text-center border-b border-theme">25%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    revenue: {
        title: 'Revenue Analysis',
        content: `
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div class="card p-6">
                    <h3 class="text-lg font-medium mb-4">Revenue by Product</h3>
                    <div class="chart-container">
                        <canvas id="revenueByProductChart"></canvas>
                    </div>
                </div>
                <div class="card p-6">
                    <h3 class="text-lg font-medium mb-4">Subscription Revenue</h3>
                    <div class="chart-container">
                        <canvas id="subscriptionRevenueChart"></canvas>
                    </div>
                </div>
            </div>
            <div class="card p-6">
                <h3 class="text-lg font-medium mb-4">Revenue Details</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="p-4 bg-secondary rounded">
                        <p class="text-sm text-secondary">Total Revenue</p>
                        <p class="text-2xl font-bold">$845,623</p>
                        <p class="success text-sm">+12.5% from last month</p>
                    </div>
                    <div class="p-4 bg-secondary rounded">
                        <p class="text-sm text-secondary">Recurring Revenue</p>
                        <p class="text-2xl font-bold">$523,891</p>
                        <p class="success text-sm">+8.2% from last month</p>
                    </div>
                    <div class="p-4 bg-secondary rounded">
                        <p class="text-sm text-secondary">One-time Sales</p>
                        <p class="text-2xl font-bold">$321,732</p>
                        <p class="success text-sm">+15.3% from last month</p>
                    </div>
                </div>
            </div>
        `
    },
    users: {
        title: 'User Management',
        content: `
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div class="card p-6">
                    <h3 class="text-lg font-medium mb-4">User Growth</h3>
                    <div class="chart-container">
                        <canvas id="userGrowthChart"></canvas>
                    </div>
                </div>
                <div class="card p-6">
                    <h3 class="text-lg font-medium mb-4">User Demographics</h3>
                    <div class="chart-container">
                        <canvas id="userDemographicsChart"></canvas>
                    </div>
                </div>
            </div>
            <div class="card p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-medium">Recent Users</h3>
                    <button class="accent-primary px-4 py-2 rounded">Export Users</button>
                </div>
                <div class="overflow-x-auto">
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 text-left border-b border-theme">User</th>
                                <th class="py-2 px-4 text-center border-b border-theme">Join Date</th>
                                <th class="py-2 px-4 text-center border-b border-theme">Status</th>
                                <th class="py-2 px-4 text-center border-b border-theme">Plan</th>
                                <th class="py-2 px-4 text-center border-b border-theme">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-2 px-4 border-b border-theme">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-secondary mr-2"></div>
                                        <div>
                                            <p class="font-medium">John Doe</p>
                                            <p class="text-sm text-secondary">john@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-2 px-4 text-center border-b border-theme">Mar 25, 2025</td>
                                <td class="py-2 px-4 text-center border-b border-theme">
                                    <span class="px-2 py-1 rounded-full text-xs success">Active</span>
                                </td>
                                <td class="py-2 px-4 text-center border-b border-theme">Premium</td>
                                <td class="py-2 px-4 text-center border-b border-theme">
                                    <button class="text-sm accent-primary px-3 py-1 rounded">View</button>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-b border-theme">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-secondary mr-2"></div>
                                        <div>
                                            <p class="font-medium">Jane Smith</p>
                                            <p class="text-sm text-secondary">jane@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-2 px-4 text-center border-b border-theme">Mar 24, 2025</td>
                                <td class="py-2 px-4 text-center border-b border-theme">
                                    <span class="px-2 py-1 rounded-full text-xs warning">Pending</span>
                                </td>
                                <td class="py-2 px-4 text-center border-b border-theme">Basic</td>
                                <td class="py-2 px-4 text-center border-b border-theme">
                                    <button class="text-sm accent-primary px-3 py-1 rounded">View</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    }
};

// Store chart instances
const chartInstances = {
    revenueChart: null,
    trafficChart: null,
    acquisitionChart: null,
    pageViewsChart: null,
    userBehaviorChart: null,
    revenueByProductChart: null,
    subscriptionRevenueChart: null,
    userGrowthChart: null,
    userDemographicsChart: null
};

// Make chartInstances available globally for theme updates
window.chartInstances = chartInstances;

// Destroy all existing charts
function destroyCharts() {
    Object.entries(chartInstances).forEach(([key, chart]) => {
        if (chart) {
            if (chart instanceof Chart) {
                chart.destroy();
            } else if (chart.destroy) {
                chart.destroy();
            }
            chartInstances[key] = null;
        }
    });
}

// Initialize charts for each view
function initViewCharts(view) {
    // Destroy existing charts before creating new ones
    destroyCharts();

    // Wait for DOM to be updated
    setTimeout(() => {
        switch(view) {
            case 'dashboard':
                initRevenueChart();
                initAcquisitionChart();
                initTrafficChart();
                break;
            case 'analytics':
                initPageViewsChart();
                initUserBehaviorChart();
                break;
            case 'revenue':
                initRevenueByProductChart();
                initSubscriptionRevenueChart();
                break;
            case 'users':
                initUserGrowthChart();
                initUserDemographicsChart();
                break;
        }

        // Add resize observer for responsive charts
        setupResizeObserver();
    }, 0);
}

// Setup resize observer for responsive charts
function setupResizeObserver() {
    const resizeObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
            const chartContainer = entry.target;
            const chartId = chartContainer.querySelector('canvas, [id]')?.id;
            if (chartId && chartInstances[chartId]) {
                const chart = chartInstances[chartId];
                if (chart instanceof Chart) {
                    chart.resize();
                } else if (chart.updateOptions) {
                    chart.updateOptions({
                        chart: {
                            width: chartContainer.clientWidth,
                            height: chartContainer.clientHeight
                        }
                    });
                }
            }
        });
    });

    // Observe all chart containers
    document.querySelectorAll('.chart-container').forEach(container => {
        resizeObserver.observe(container);
    });
}

// Common chart options for responsiveness
const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: window.innerWidth < 768 ? 'bottom' : 'top',
            labels: {
                boxWidth: window.innerWidth < 768 ? 12 : 20,
                padding: window.innerWidth < 768 ? 10 : 20
            }
        }
    }
};

// Chart initialization functions with responsive options
function initRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;

    chartInstances.revenueChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
            datasets: [{
                label: 'Revenue',
                data: [685421, 721053, 758963, 798652, 825410, 845623],
                borderColor: getComputedStyle(document.documentElement).getPropertyValue('--accent-primary'),
                backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--accent-primary') + '33',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            ...commonChartOptions,
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return window.innerWidth < 768 ? 
                                '$' + (value/1000) + 'k' : 
                                '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

function initAcquisitionChart() {
    const element = document.querySelector("#acquisitionChart");
    if (!element) return;

    chartInstances.acquisitionChart = new ApexCharts(element, {
        series: [{
            name: 'Paid',
            data: [350, 420, 490, 520, 580, 620]
        }, {
            name: 'Organic',
            data: [450, 520, 550, 600, 680, 720]
        }],
        chart: {
            type: 'bar',
            height: 300,
            stacked: true,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '60%',
            },
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        },
        fill: {
            opacity: 1
        },
        colors: [
            getComputedStyle(document.documentElement).getPropertyValue('--accent-primary'),
            getComputedStyle(document.documentElement).getPropertyValue('--success-color')
        ],
        legend: {
            position: 'top',
            horizontalAlign: 'right'
        }
    });
    
    chartInstances.acquisitionChart.render();
}

function initTrafficChart() {
    const ctx = document.getElementById('trafficChart');
    if (!ctx) return;

    chartInstances.trafficChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Organic Search', 'Direct', 'Referral', 'Social', 'Email'],
            datasets: [{
                data: [45, 25, 15, 10, 5],
                backgroundColor: [
                    getComputedStyle(document.documentElement).getPropertyValue('--accent-primary'),
                    getComputedStyle(document.documentElement).getPropertyValue('--success-color'),
                    getComputedStyle(document.documentElement).getPropertyValue('--accent-secondary'),
                    getComputedStyle(document.documentElement).getPropertyValue('--warning-color'),
                    getComputedStyle(document.documentElement).getPropertyValue('--danger-color')
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            cutout: '70%'
        }
    });
}

function initPageViewsChart() {
    const ctx = document.getElementById('pageViewsChart').getContext('2d');
    if (!ctx) return;

    chartInstances.pageViewsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Page Views',
                data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
                borderColor: getComputedStyle(document.documentElement).getPropertyValue('--accent-primary'),
                backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--accent-primary') + '33',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function initUserBehaviorChart() {
    const ctx = document.getElementById('userBehaviorChart').getContext('2d');
    if (!ctx) return;

    chartInstances.userBehaviorChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Bounce Rate', 'Avg. Time', 'Pages/Session', 'New Users'],
            datasets: [{
                data: [32, 45, 3.2, 65],
                backgroundColor: [
                    getComputedStyle(document.documentElement).getPropertyValue('--accent-primary'),
                    getComputedStyle(document.documentElement).getPropertyValue('--success-color'),
                    getComputedStyle(document.documentElement).getPropertyValue('--warning-color'),
                    getComputedStyle(document.documentElement).getPropertyValue('--accent-secondary')
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function initRevenueByProductChart() {
    const ctx = document.getElementById('revenueByProductChart').getContext('2d');
    if (!ctx) return;

    chartInstances.revenueByProductChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Product A', 'Product B', 'Product C', 'Product D'],
            datasets: [{
                data: [35, 25, 20, 20],
                backgroundColor: [
                    getComputedStyle(document.documentElement).getPropertyValue('--accent-primary'),
                    getComputedStyle(document.documentElement).getPropertyValue('--success-color'),
                    getComputedStyle(document.documentElement).getPropertyValue('--warning-color'),
                    getComputedStyle(document.documentElement).getPropertyValue('--accent-secondary')
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function initSubscriptionRevenueChart() {
    const ctx = document.getElementById('subscriptionRevenueChart').getContext('2d');
    if (!ctx) return;

    chartInstances.subscriptionRevenueChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Subscription Revenue',
                data: [450000, 480000, 510000, 490000, 520000, 550000],
                borderColor: getComputedStyle(document.documentElement).getPropertyValue('--success-color'),
                backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--success-color') + '33',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function initUserGrowthChart() {
    const ctx = document.getElementById('userGrowthChart').getContext('2d');
    if (!ctx) return;

    chartInstances.userGrowthChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'New Users',
                data: [1500, 1800, 2100, 2400, 2700, 3000],
                borderColor: getComputedStyle(document.documentElement).getPropertyValue('--accent-primary'),
                backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--accent-primary') + '33',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function initUserDemographicsChart() {
    const ctx = document.getElementById('userDemographicsChart').getContext('2d');
    if (!ctx) return;

    chartInstances.userDemographicsChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
            datasets: [{
                data: [20, 35, 25, 15, 5],
                backgroundColor: [
                    getComputedStyle(document.documentElement).getPropertyValue('--accent-primary'),
                    getComputedStyle(document.documentElement).getPropertyValue('--success-color'),
                    getComputedStyle(document.documentElement).getPropertyValue('--warning-color'),
                    getComputedStyle(document.documentElement).getPropertyValue('--accent-secondary'),
                    getComputedStyle(document.documentElement).getPropertyValue('--danger-color')
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// View switching function
function switchView(viewName) {
    const view = views[viewName];
    if (!view) return;

    // Update page title
    const titleElement = document.querySelector('h1.text-2xl.font-bold');
    if (titleElement) {
        titleElement.textContent = view.title;
    }

    // Update main content
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = view.content;
    }

    // Initialize charts for the view
    initViewCharts(viewName);

    // Update active menu item
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('bg-secondary');
    });
    const activeMenuItem = document.querySelector(`[data-view="${viewName}"]`);
    if (activeMenuItem) {
        activeMenuItem.classList.add('bg-secondary');
    }

    // Close mobile menu if open
    if (window.innerWidth <= 768) {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }
    }
}

// Add mobile menu toggle functionality
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const body = document.body;
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent body scrolling when sidebar is open
    if (sidebar.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    
    if (window.innerWidth <= 768 && 
        !sidebar.contains(event.target) && 
        !mobileToggle.contains(event.target) && 
        sidebar.classList.contains('active')) {
        toggleSidebar();
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const body = document.body;
    
    if (window.innerWidth > 768) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    }
});

// Initialize the application
function initApp() {
    // Set up click event listeners for menu items
    const menuItems = document.querySelectorAll('.menu-item, .mobile-nav-button');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const view = item.getAttribute('data-view');
            if (view) {
                switchView(view);
                
                // Update active states for both sidebar and mobile navigation
                document.querySelectorAll('.menu-item, .mobile-nav-button').forEach(navItem => {
                    navItem.classList.remove('active');
                });
                item.classList.add('active');
                
                // Close sidebar on mobile after selection
                if (window.innerWidth <= 768) {
                    const sidebar = document.querySelector('.sidebar');
                    const overlay = document.querySelector('.sidebar-overlay');
                    sidebar.classList.remove('active');
                    overlay.classList.remove('active');
                }
            }
        });
    });
    
    switchView('dashboard');
    // Initialize charts with resize handler
    const resizeHandler = debounce(() => {
        if (window.chartInstances) {
            Object.values(window.chartInstances).forEach(chart => {
                if (chart && chart.update) {
                    chart.update();
                }
            });
        }
    }, 250);

    window.addEventListener('resize', resizeHandler);

    // Initialize the default view
    switchView('dashboard');
}

// Add mobile theme popup handling
function toggleThemePopup() {
    const popup = document.querySelector('.mobile-theme-popup');
    popup.classList.toggle('active');
    
    // Close popup when clicking outside
    if (popup.classList.contains('active')) {
        document.addEventListener('click', closeThemePopup);
    } else {
        document.removeEventListener('click', closeThemePopup);
    }
}

function closeThemePopup(event) {
    const popup = document.querySelector('.mobile-theme-popup');
    const themeButton = document.querySelector('.mobile-theme-button');
    
    if (!popup.contains(event.target) && !themeButton.contains(event.target)) {
        popup.classList.remove('active');
        document.removeEventListener('click', closeThemePopup);
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
