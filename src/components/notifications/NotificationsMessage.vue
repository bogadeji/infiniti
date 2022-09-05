<script>
    import { mapActions } from 'vuex';
    export default {
    
        data() {
            return {
                timeout: null
            }
        },
    
        props: ["notification"],
    
        computed: {
            typeClass() {
                return `alert-${this.notification.type}`;
            }
        },
    
        methods: {
            ...mapActions(['removeNotification'])
        },
        
        created() {
            this.timeout = setTimeout(() => {
                this.removeNotification(this.notification);
            }, 4000)
        },
    
        beforeDestroy() {
            clearTimeout(this.timeout)
        }
    
    }
    </script>
    <template>
        <div class="" :class="typeClass">
            <button>
                <span aria-hidden="true">&times;</span>
            </button>
            
            <p class="text-grey-10">{{ notification.message }}</p>
        </div>
    </template>