$(document).ready(function () {
    // 关闭窗口
    document.onkeydown = function (event) {
        if (event.keyCode === 27) {
            $('.modalWrap').hide();
            setTimeout(function () {
                $('.modalWrap').remove();
            }, 500);
        }
    }

    $(document).on('click', '.modalHead span:nth-child(2)', function(event) {
        $('.modalWrap').remove();
    })

    var solutionImg = new CreateModal('solution_case', '.solution_img');
    var solutionTitle = new CreateModal('solution_case', '.solution_title');
    var solutionAuthor = new CreateModal('solution_case', '.solution_author');
    var solutionAuthor = new CreateModal('customer_case', '.customer_img');
    var solutionAuthor = new CreateModal('customer_case', '.customer_title');
    var solutionAuthor = new CreateModal('customer_case', '.customer_author');

    // 生成窗口
    function CreateModal (modalArea, selector) {
        $(selector).on('click', function(e) {
            e.preventDefault();
            var clickItemIndex = 0;
            clickItemIndex = $(selector).index(this);

            $('.modalWrap').html('');
            var modalWrapDiv = $('<div class="modalWrap">' +
                '<div class="modalContent style="width: 60%; height: 600px; position: absolute; left: 50%; top: 50%; ">' +
                    '<div class="modalHead"><span></span><span><img src="../assets/img/common/Icon-close.png" alt="""></span></div>' +
                    '<div class="modalBody"></div>' +
                '</div>' +
            '</div>');


            $('body').append(modalWrapDiv);

            if (modalArea === 'solution_case') {
                solutionBody(clickItemIndex);
            } else if (modalArea === 'customer_case') {
                customerBody(clickItemIndex);
            }
        })
    }
    
    // 解决方案详情
    function solutionBody (solutionIndex) {
        switch (solutionIndex) {
            case 0:
                $('.modalBody').html('<p class="mainPararaph"><b>运维托管解决方案</b></p>' +
                    '<p class="mainPararaph"><b>方案描述：</b>博思云为提供完善的运维托管服务，在架构设计、监控管理、安全管理、运维管理、应急响应、优化管理等几个方面为客户提供服务。</p>' +
                    '<div class="subContent">' +
                        '<p><b>架构设计：</b>帮助客户设计适用于亚马逊云科技的业务架构，通过重构、替换等方式，尽可能使用亚马逊云科技托管服务，从高可用、弹性、持久性、灾备恢复、成本报价等多个方面进行综合考虑，为客户提供EC2、RDS、VPC、AS、ELB、DevOps、AI等多个方面最优的设计方案。</p>' +
                        '<p><b>监控管理：</b>通过CloudWatch、Cloudtrail或者第三方Splunk、EKK等方案实现对各类亚马逊云科技托管服务的状态进行监控，确保业务运行状态良好且稳定，并在故障发生时及时通过短信、邮件等方式通知运维人员；对API与用户行为进行监控与审计等，确保所有资源与数据的安全和可靠，在万一出现不知名故障或恶意操作时能够及时响应与报警。</p>' +
                        '<p><b>安全管理：</b>帮助客户管理所有的账户，完善账户与权限体系，确保账户的正常安全访问。帮助客户运维并管理所有的VPC与EC2中的私网/公网访问，调整Security Group与NACL等确保网络访问与数据传输的安全性。及时更新漏洞补丁等，确保操作系统，应用软件等的安全性。</p>' +
                        '<p><b>运维管理：</b>根据客户的行业特性与实际情况等，帮助客户分析并制定标准的运维流程，完善整体的巡检与安全策略、账户管理体系，确保运维的高效与可靠，尽可能避免失误/漏洞而造成业务运营问题。</p>' +
                        '<p><b>应急响应：</b>对于客户的使用问题，以及系统的红色警报等问题，我们提供了7x24小时的远程响应服务，5分钟紧急故障响应，尽可能快速修复/解决问题，避免对业务运行产生重大的影响。</p>' +
                        '<p><b>优化管理：</b>帮助客户分析Billing Report中的费用情况，检测是否有异常增长/费用等问题，并结合CloudWatch与Cloudtrail的监控记录，提出对于资源的使用、账户使用、计费管理方面的TCO报告与优化建议。</p>' +
                    '</div>' +
                    '<p class="mainPararaph"><b>应用场景：</b>博思云为拥有多年丰厚的亚马逊云科技运维服务经验，为IT科技公司、制造业、银行、金融等众多企业客户提供过解决方案与运维管理服务。无论简单还是复杂的业务体系结构，我们都将为客户提供高质量的服务，帮助客户解决在亚马逊云科技上遇到的所有问题，确保客户的业务在云上稳定、良好的运行。</p>' +
                    '<p class="mainPararaph"><b>方案优势：</b>博思云为竭诚为客户提供专业的、高可靠性的，完善的一站式运维服务。为客户在亚马逊云科技上业务架构、安全、运维、应急响应、业务/架构/使用优化等服务，确保每一位客户的业务在稳定、可靠的前提下，省心、省力、省钱的运行。</p>'
                )
                break;
            case 1:
                $('.modalBody').html('<p class="modalTitle"><b>日志管理与集成解决方案</b></p>' +
                    '<p class="mainPararaph"><b>EKK日志管理解决方案：</b><img src="../assets/img/portfolio/solution_case/Solution-EkkLog.png" alt=""></p>' +
                    '<p class="mainPararaph"><b>方案描述：</b>基于流行的ELK（Elasticsearch,Logstash, and Kibana）系统改造成为更加精简的托管式的适应于亚马逊云科技的EKK解决方案（AmazonElasticsearch Service, Amazon Kinesis, andKibana）。采用Kinesis替代Logstash，使用亚马逊云科技托管的Elasticsearch服务提供更加稳定高效的运行环境。通过KinesisAgent收集目标机器上的特定信息/日志，传输至Kinesis处理，备份至S3同时汇总数据至Elasticsearch进行自定义的可视化展示。为了更加精准的把握用户使用习惯等数据，采用Lambda实时收集并传输ELB的日志信息至S3与Elasticsearch。</p>' +
                    '<p class="mainPararaph"><b>应用场景：</b>EKK是一套基于亚马逊云科技的实时日志分析管理平台，通过Agent可以收集系统日志、应用程序日志、安全日志等，并集中处理后可以特定方式进行可视化展示。通常在机器数过大时，日志分布在上百台机器上，难以收集且难以分析；即便使用手工/半手工方式收集了日志信息，采用Grep/Awk/Wc等方式进行统计检索效率也极其低下。因此在大机器数/大分布式集群等条件下采用博思提供的EKK日志管理方案能够很好的解决日志收集、管理、分析与可视化展示的问题。</p>' +
                    '<p class="mainPararaph"><b>方案优势：</b>相比传统的手工/脚本日志管理方式，更加高效且稳定，能够极其高效的收集并分析数百台机器的日志信息，并以自定义的方式进行可视化展示；相比，普通的ELK架构，EKK架构则更加适用于亚马逊云科技平台，采用了多种亚马逊云科技托管服务，能够有效降低运维压力与成本，同时不用担心服务性能瓶颈。</p>' +
                    '<p class="mainPararaph"><b>Splunk管理集成解决方案：</b><img src="../assets/img/portfolio/solution_case/Solution-Splunk.png" alt=""></p>' +
                    '<p class="mainPararaph"><b>方案描述：</b>采用Splunk管理解决方案，在亚马逊云科技上能够监控管理EC2、RDS、Kinesis、ELB、S3、Config、CloudFront、CloudWatch、FlowLogs、Billing等大多数亚马逊云科技服务，通过实时收集分析亚马逊云科技上各类服务的日志，并以图形化方式进行展示，便于把控整体系统的运行情况。除了基础的服务日志管理外，Splunk还能结合BillingReport与Cloudtrail、CloudWatch等服务的日志信息，分析并管理各个服务的资源使用情况，并提出可行的优化建议；Splunk还能通过可视化的方案展现所有的账户及其组别体系，区分各个账户的权限级别，实时监控并管理账户的使用情况，保证账户的安全性。而且在亚马逊云科技全球区域里，都提供了Cloudformation模板与SplunkAMI，能够一键快速部署Splunk解决方案。</p>' +
                    '<p class="mainPararaph"><b>应用场景：</b>Splunk是成熟的产品，而且针对亚马逊云科技进行了定制的优化，能够合理的管控亚马逊云科技上大部分服务资源，监控资源的使用情况，同时能够针对账户使用情况进行管理优化，能够针对账单与各个服务使用量进行分析并提出优化方案。适用与所有需要重视亚马逊云科技资源管理、账号安全控制、账单分析与资源优化的场景与客户。</p>' +
                    '<p class="mainPararaph"><b>方案优势：</b>相比单纯的日志管理与分析平台，Splunk能提供更加完善的解决方案，能在账户与资源使用量、账单报表等多个方面提供更为强大的管理、分析、优化能力。并且基于成熟的商业产品性质，在后续的软件更新与亚马逊云科技支持上也会有更好的体验。</p>'
                )
                break;
            default:
                $('.modalBody').html('<p class="modalTitle"><b>大数据与AI解决方案</b></p>' +
                '<p class="mainPararaph"><b>大数据分析解决方案：</b><img src="../assets/img/portfolio/solution_case/Solution-BigData.png" alt=""></p>' +
                '<p class="mainPararaph"><b>方案描述：</b>在亚马逊云科技上构建完整的大数据分析体系，可以采用HIVE+Spark+HDFS的架构使用EC2自建或采用由亚马逊云科技提供的ElasticMapReduce（EMR）+SimpleStorageService+RedShift架构来完成大数据分析的目标。对于HIVE与Spark的自建架构，博思云为不推荐使用，自建架构是为初级的云计算服务使用方式，抛弃了很多云上的优势。对此，博思云为建议客户采用亚马逊云科技Service完成整个大数据架构。在基于亚马逊云科技的大数据方案中，我们采用了亚马逊云科技提供的EMR服务，EMR服务可以简单理解为托管的Hadoop集群，其中包含了MapReduce与HDFS等运算存储集群。基于EMR，我们帮助客户加工与处理结构化与非结构化业务数据、按照客户的需求，分析与开发出数据业务特征处理算法，对结构化与非结构化的数据进行清洗（去重、去残缺、去错误、一致性检查）、脱敏（条目混淆、加密）、数据格式转换（字段类型调整、表数据拆分/合并、数据粒度转换）等。最终将已完成转换的有效数据以适合于数据仓库加载的格式（例如：CSV）导出并转存在S3存储中，并通过加载工具将有效数据集导入至Redshift数据仓库，作为后续企业BI、AI等业务的数据来源。对于安全与资源管理方面，博思除采用IAM之外，还会集成一套自有资源与权限管理系统，可实现单点登陆SSO，日志审计等方式确保账户与访问，安全避免资源使用混淆、资源盗用等风险。</p>' +
                '<p class="mainPararaph"><b>应用场景：</b>对于所有希望新建大数据分析平台的用户来说，云是原生的适合于大数据分析的。大数据分析的使用场景中，每次运算都需要大量的计算资源，但是在分析完成后资源将处于闲置状态，我们的大数据方案基于亚马逊云科技，使用托管的EMR服务运算分析，随时可以启动/删除集群，最大程度的节省了使用成本。对于希望上云的客户而言，无论在本地使用的是怎样的架构方案，博思都将帮助客户完成整体的结构改造与迁移，更好的适应云，节省大量的基础环境与软件维护工作，使客户能将更多的精力集中在业务相关的数据分析中。</p>' +
                '<p class="mainPararaph"><b>方案优势：</b>基于亚马逊云科技的大数据方案里，采用托管的EMR与S3存储、RedShift服务等，能够节省大量的基础环境搭建与维护工作，同时无需担心软件与硬件的性能能力，所有的服务都以自动伸缩式集群的方案提供极其巨大的负载能力，以保证能够满足用户所有的性能需求。基于亚马逊云科技，所有的计算资源与存储资源都可以即开即用，避免了一切不必要的资源闲置与浪费，能够最大程度的节省成本费用，除此之外，博思云自研出一套对EMR+S3的安全与资源管理系统，可以实现统一身份认证，日志审计，资源与权限分配，以及集成CD/CI的能力。</p>' +
                '<p class="mainPararaph"><b>人工智能解决方案：</b><img class="solution_ai_img" src="../assets/img/portfolio/solution_case/Solution-AI.png" alt=""></p>' +
                '<p class="mainPararaph"><b>方案描述：</b>在AI解决方案里，采用了博思成熟的大数据分析方案作为数据处理模块，提供AI运算所需的数据源，采用EMR对基础数据做清洗、转换、脱敏等，并最终存储在DataLake数据存储模块中；为了更好的控制AI运算资源，博思设计了DockerCluster模块，使用K8S搭建Docker集群，为每一个用户动态提供一个基础的Docker环境，Docker环境里使用Jupyter来编辑运算脚本，用户数据存储则由数据存储模块提供；配合用户的科学计算，博思设计了AICluster模块，其中使用TensorFlow集群提供基础的科学计算环境，供DockerCluster模块调用，用户数据与运算结果则存储在数据存储模块中。整个AI方案中，所有的持久化实践存储都使用数据存储模块，对于数据处理与AI计算模块提供S3等静态存储供EMR与TenorFlow存储静态的结果数据，对于DockerCluster则提供了EBS、NFS、EFS等多种存储配合使用存放用户的自定义数据；在K8S环境下，为每一个用户划分一块单独的存储空间并持续保留，在每一次用户新登录时，自动载入用户原有的数据。由此形成一套完整的、多用户的、可弹性伸缩，并最大程度节省运算资源的AI环境。为了更好配合企业的用户管理与安全审计，博思将整体的AI环境置于内部网络，采用堡垒机监控审计所有的出入访问，使用LDAP等多种方式尽可能集成企业已有的用户体系，便于企业用户管理。并集成开源CI/CD软件，让企业在安全，资源与权限管理等都能有最好的解决方案。</p>' +
                '<p class="mainPararaph"><b>应用场景：</b>人工智能概念早在多年前就被提出，但是一直无法落地与发展，是因为软硬件环境无法达到要求。现如今，云计算提供了强大且平价的计算能力，大数据分析在云计算上提供了海量的精准数据，至此AI的所有条件都已经备齐。博思云为则提供了基于亚马逊云科技的最为流行且高效的AI计算平台解决方案，适合所有希望在云上使用AI的场景与客户。</p>' +
                '<p class="mainPararaph"><b>方案优势：</b>博思拥有强大的技术实力，集成并整合了LDAP与GitLab等为企业提供更好的用户管理与代码集成管理。结合K8S与Docker技术，自主开发构建基于TensorFlow与Jupyter的自动化AI计算平台，并以Docker作为最小粒度自动伸缩容量、动态提供运算资源。相比传统的AI解决方案中使用VM虚机或者物理机，容器能够更加快速的动态提供服务，并以更加细粒度的资源配置提供服务；并使用EBS、NFS、EFS等作为Docker用户存储源，以Jupyter多用户模式，独立分割存储所有用户的数据，并且借助S3近乎无穷的存储容量以及99.999999999%可靠性提供最佳的数据湖。</p>'
            );
                break;
        }
    }

    // 客户案例详情
    function customerBody (customerIndex) {
        switch (customerIndex) {
            case 0:
                $('.modalBody').html('<p class="modalTitle"><b>TSL电商管理平台</b></p>' +
                    '<p class="mainPararaph"><b>公司简介：</b></p>' +
                    '<p class="mainPararaph textIndent2em">谢瑞麟(TSL)珠宝有限公司创立于1971年，1987在香港联交所公开上市，业务遍布港澳，大陆与东南亚。谢瑞麟珠宝：璀璨、纯洁、闪亮、完美，是性价比卓越的婚戒。随着互联网营销的蓬勃发展，谢瑞麟珠宝也大力进军发展网上销售渠道，包括网上旗舰店，无人机体验社区，应用分享，在线应用等.形成线上, 线下实体店，渠道多层次的销售模式。</p>' +
                    '<p class="mainPararaph textIndent2em">现有的IT系统无法满足多样型的销售发展需求，新应用程序（营销，价格更新，供应商渠道，产品）发布速度增加，但开发团队代码更新、开发、测试、生产部署执行发行周期长、容易出错。维护团队持续增加服务器数量，应用与服务器的对应关系复杂，难以定位是应用本身问题，还是基础架构的问题。</p>' +
                    '<p class="mainPararaph"><b>问题分析与需求定义：</b></p>' + 
                    '<p class="mainPararaph textIndent2em">亚马逊云科技与博思云为公司的销售与技术联合团队深入到谢瑞麟的IT部门进行调研，调研总结是，IT部门还处于传统的“IT管理”模式更关注具体服务器管理、网络管理和系统软件安装部署等工作。开发人员负责生产就绪代码管理和新功能的实现环节多，而且不是自动化方式,需要新的更高效的方法需要协作与整合，提升维护效率。</p>' +
                    '<p class="mainPararaph textIndent2em">需要文化观念的改变，不断适应快速变化的市场，更多地关注业务的改进与提升。需要转向更多地关注业务的改进与提升模式，关注流程的规范化、标准化，明确定义各个流程的目标和范围、有关人员的责权利，以及各个流程之间的关系等，比如应用定义，配置管理流程等，实现应用程序的自动化构建、部署、测试和发布。</p>' +
                    '<p class="mainPararaph"><b>方案建议：</b></p>' + 
                    '<p class="mainPararaph textIndent2em">DevOps是利用云解决方案的优势，将敏捷实践与过程组合起来。实现应用程序的持续集成、开发、构建、部署、测试和发行目标。采用DevOps模式促进协作，通过自动化为协作提供方便, 将敏捷活动的持续开发目标扩展到持续集成和发行。</p>' + 
                    '<p class="mainPararaph textIndent2em"><img src="../assets/img/portfolio/customer_case/DevOps-Dev.png" alt=""></p>' + 
                    '<p class="mainPararaph textIndent2em">DevOps核心思想就是：“快速交付价值，灵活响应变化”。其基本原则如下：高效的协作和沟通；自动化流程和工具；快速敏捷的开发；持续交付和部署；不断学习和创新。通过技术工具，把传统的手工操作转变为自动化流程，这不仅有利于提高产品开发、运维部署的效率，还将减少人为因素引起的失误和事故，提早发现问题并及时地解决问题，这样也保证了产品的质量。</p>' + 
                    '<p class="mainPararaph textIndent2em">下图展示了基于亚马逊云科技平台DevOps自动化的流程：</p>' + 
                    '<p class="mainPararaph textIndent2em"><img class="solution_ai_img" src="../assets/img/portfolio/customer_case/DevOps-AWS.png" alt=""></p>' + 
                    '<p class="mainPararaph textIndent2em">CloudFormation, CodeCommit, CodeBuild, CodeDaploy持续交付部署：实现应用程序的自动化构建、部署、测试和发布。AmazonLambda 可以自动运行代码，而无需配置或管理服务器。只需编写代码并将其上传至CodeCommit，通过Commit自动触发lambda响应来启动应用程序。</p>' + 
                    '<p class="mainPararaph"><b>方案效果：</b></p>' + 
                    '<p class="mainPararaph textIndent2em">该项目起适于2018.06.01日～2018.09.30日，更多地关注业务的改进与提升更快速地交付，响应市场的变化，新APP上线时间从平均4周缩短到2周，维护人员人均维护效率提升70%。</p>'
                )
                break;
            case 1:
                $('.modalBody').html('<p class="modalTitle"><b>Galanz电商管理平台</b></p>' +
                    '<p class="mainPararaph"><b>公司简介：</b></p>' +
                    '<p class="mainPararaph textIndent2em">格兰仕集团是一家综合性白色家电品牌企业，是中国家电业具有强大影响力的龙头企业之一。格兰仕自1978年9月28日创立以来，从轻纺明星企业，到微波炉“黄金品牌”，再到综合性白色家电集团，一直是中国制造在国际市场上的一张名片。怀抱“百年企业 世界品牌”愿景，秉持“努力，让顾客感动”宗旨，格兰仕匠心智造精品电器，造福全球近200个国家和地区人民，创造更简单有趣的G+智慧家居解决方案，满足世界各地人民日益增长的美好生活需要和不断变化的消费升级需求。 </p>' +
                    '<p class="mainPararaph"><b>需求分析：</b></p>' + 
                    '<p class="mainPararaph textIndent2em">格兰仕原在本地服务器搭建了电商网站，并拥有大量的订单交易。伴随着业务的增长。通过开发和部署新的增强服务和应用，跟上客户和用户不断变化的需求，确保客户和用户都可以使用这些IT服务和应用，并保证其数据和信息安全成为了格兰仕首要考虑的问题。</p>' +
                    '<p class="mainPararaph textIndent2em">1. 把传统的手工操作转变为自动化流程，能够持续开发、持续测试、持续集成、持续部署及持续监控，提高产品开发、运维部署的效率，减少人为因素引起的失误和事故，提早发现问题并及时地解决问题。</p>' +
                    '<p class="mainPararaph textIndent2em">2. 减少本地服务器压力、节约成本、能够提高产品或服务的交付速度，帮助企业具备足够的敏捷性、精益性及安全性，快速应对客户需求、市场条件、竞争压力或法规要求等方面的变化。</p>' +
                    '<p class="mainPararaph textIndent2em">通过亚马逊云科技部署DevOps电商平台， 利用相关服务提供平台的安全、快速、自动化流程、日志监控等服务来管理该平台， 且按需使用资源，高度可扩展、灵活易管理的业务模式，具有大规模、虚拟化、高可靠及弹性配置等属性。</p>' +
                    '<p class="mainPararaph"><b>解决方案：</b></p>' + 
                    '<p class="mainPararaph textIndent2em"><img class="solution_ai_img" src="../assets/img/portfolio/customer_case/DevOps-Galanz.png" alt=""></p>' + 
                    '<p class="mainPararaph textIndent2em">对此，格兰仕在多方考察后，决定使用亚马逊云科技来帮助他们管理电商网站，同时本地服务器作为ECS代码仓库。在本方案，采用了多AZ部署以确保高可用性，使用AmazonWAF 作为Web 应用程序防火墙及Lambda限制入站访问规则，使用了AutoScaling与ALB去确保中间件等无状态服务器的处理能力，并使用亚马逊云科技的RDS for MySQL作为数据存储，以CodePipeline、CodeBuild、CodeDeploy、CodeCommit、CodeStar实现DevOps。结合CloudWatch、X-Ray提供完整的监控报警能力，形成了可配置、可重建、可追溯、自动化、可视化、服务化的优秀DevOps工具链。</p>' + 
                    '<p class="mainPararaph"><b>方案收益：</b></p>' + 
                    '<p class="mainPararaph textIndent2em">该方案开始于2018年10月，结束于2019年2月初，实施以来，客户的研发管理由传统的手工作坊式进入到高效、敏捷、协同的状态，所有的动作全部通过一体化的平台进行组织，可靠性、计算成本、存储资源成本、运维成本等各方面都得到了巨大的优化提升。</p>'
                )
                break;
            default:
                $('.modalBody').html('<p class="modalTitle"><b>大数据与AI解决方案</b></p>' +
                '<p class="mainPararaph"><b>大数据分析解决方案：</b><img src="../assets/img/portfolio/solution_case/Solution-BigData.png" alt=""></p>' +
                '<p class="mainPararaph"><b>方案描述：</b>在亚马逊云科技上构建完整的大数据分析体系，可以采用HIVE+Spark+HDFS的架构使用EC2自建或采用由亚马逊云科技提供的ElasticMapReduce（EMR）+SimpleStorageService+RedShift架构来完成大数据分析的目标。对于HIVE与Spark的自建架构，博思云为不推荐使用，自建架构是为初级的云计算服务使用方式，抛弃了很多云上的优势。对此，博思云为建议客户采用亚马逊云科技Service完成整个大数据架构。在基于亚马逊云科技的大数据方案中，我们采用了亚马逊云科技提供的EMR服务，EMR服务可以简单理解为托管的Hadoop集群，其中包含了MapReduce与HDFS等运算存储集群。基于EMR，我们帮助客户加工与处理结构化与非结构化业务数据、按照客户的需求，分析与开发出数据业务特征处理算法，对结构化与非结构化的数据进行清洗（去重、去残缺、去错误、一致性检查）、脱敏（条目混淆、加密）、数据格式转换（字段类型调整、表数据拆分/合并、数据粒度转换）等。最终将已完成转换的有效数据以适合于数据仓库加载的格式（例如：CSV）导出并转存在S3存储中，并通过加载工具将有效数据集导入至Redshift数据仓库，作为后续企业BI、AI等业务的数据来源。对于安全与资源管理方面，博思除采用IAM之外，还会集成一套自有资源与权限管理系统，可实现单点登陆SSO，日志审计等方式确保账户与访问，安全避免资源使用混淆、资源盗用等风险。</p>' +
                '<p class="mainPararaph"><b>应用场景：</b>对于所有希望新建大数据分析平台的用户来说，云是原生的适合于大数据分析的。大数据分析的使用场景中，每次运算都需要大量的计算资源，但是在分析完成后资源将处于闲置状态，我们的大数据方案基于亚马逊云科技，使用托管的EMR服务运算分析，随时可以启动/删除集群，最大程度的节省了使用成本。对于希望上云的客户而言，无论在本地使用的是怎样的架构方案，博思都将帮助客户完成整体的结构改造与迁移，更好的适应云，节省大量的基础环境与软件维护工作，使客户能将更多的精力集中在业务相关的数据分析中。</p>' +
                '<p class="mainPararaph"><b>方案优势：</b>基于亚马逊云科技的大数据方案里，采用托管的EMR与S3存储、RedShift服务等，能够节省大量的基础环境搭建与维护工作，同时无需担心软件与硬件的性能能力，所有的服务都以自动伸缩式集群的方案提供极其巨大的负载能力，以保证能够满足用户所有的性能需求。基于亚马逊云科技，所有的计算资源与存储资源都可以即开即用，避免了一切不必要的资源闲置与浪费，能够最大程度的节省成本费用，除此之外，博思云自研出一套对EMR+S3的安全与资源管理系统，可以实现统一身份认证，日志审计，资源与权限分配，以及集成CD/CI的能力。</p>' +
                '<p class="mainPararaph"><b>人工智能解决方案：</b><img src="../assets/img/portfolio/solution_case/Solution-Splunk.png" alt=""></p>' +
                '<p class="mainPararaph"><b>方案描述：</b>在AI解决方案里，采用了博思成熟的大数据分析方案作为数据处理模块，提供AI运算所需的数据源，采用EMR对基础数据做清洗、转换、脱敏等，并最终存储在DataLake数据存储模块中；为了更好的控制AI运算资源，博思设计了DockerCluster模块，使用K8S搭建Docker集群，为每一个用户动态提供一个基础的Docker环境，Docker环境里使用Jupyter来编辑运算脚本，用户数据存储则由数据存储模块提供；配合用户的科学计算，博思设计了AICluster模块，其中使用TensorFlow集群提供基础的科学计算环境，供DockerCluster模块调用，用户数据与运算结果则存储在数据存储模块中。整个AI方案中，所有的持久化实践存储都使用数据存储模块，对于数据处理与AI计算模块提供S3等静态存储供EMR与TenorFlow存储静态的结果数据，对于DockerCluster则提供了EBS、NFS、EFS等多种存储配合使用存放用户的自定义数据；在K8S环境下，为每一个用户划分一块单独的存储空间并持续保留，在每一次用户新登录时，自动载入用户原有的数据。由此形成一套完整的、多用户的、可弹性伸缩，并最大程度节省运算资源的AI环境。为了更好配合企业的用户管理与安全审计，博思将整体的AI环境置于内部网络，采用堡垒机监控审计所有的出入访问，使用LDAP等多种方式尽可能集成企业已有的用户体系，便于企业用户管理。并集成开源CI/CD软件，让企业在安全，资源与权限管理等都能有最好的解决方案。</p>' +
                '<p class="mainPararaph"><b>应用场景：</b>人工智能概念早在多年前就被提出，但是一直无法落地与发展，是因为软硬件环境无法达到要求。现如今，云计算提供了强大且平价的计算能力，大数据分析在云计算上提供了海量的精准数据，至此AI的所有条件都已经备齐。博思云为则提供了基于亚马逊云科技的最为流行且高效的AI计算平台解决方案，适合所有希望在云上使用AI的场景与客户。</p>' +
                '<p class="mainPararaph"><b>方案优势：</b>博思拥有强大的技术实力，集成并整合了LDAP与GitLab等为企业提供更好的用户管理与代码集成管理。结合K8S与Docker技术，自主开发构建基于TensorFlow与Jupyter的自动化AI计算平台，并以Docker作为最小粒度自动伸缩容量、动态提供运算资源。相比传统的AI解决方案中使用VM虚机或者物理机，容器能够更加快速的动态提供服务，并以更加细粒度的资源配置提供服务；并使用EBS、NFS、EFS等作为Docker用户存储源，以Jupyter多用户模式，独立分割存储所有用户的数据，并且借助S3近乎无穷的存储容量以及99.999999999%可靠性提供最佳的数据湖。</p>'
            );
                break;
        }
    }
});
