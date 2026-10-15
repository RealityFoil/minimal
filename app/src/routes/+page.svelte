<script lang="ts">
  import { Thing1 } from '#lib/Thing1.ts';
  import { Thing2 } from '@rf.minimal/components/Thing2.ts';
  import { Config } from '@rf.minimal/components/util.ts';
</script>

<div>
  <Thing1 name="Thing1" />
  <Thing2 name="Thing2" />
  <div>{Config}</div>
</div>
