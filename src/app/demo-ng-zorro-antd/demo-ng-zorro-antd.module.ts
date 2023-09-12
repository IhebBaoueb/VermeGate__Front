



// ng-zorro-imports.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Basic Components
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpinModule } from 'ng-zorro-antd/spin';

// Layout Components
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';

// Navigation Components
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

// Form Components
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

// Data Display Components
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@NgModule({
  exports: [
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzTableModule,
    NzLayoutModule,
    NzGridModule,
    NzMenuModule,
    NzIconModule,
    NzFormModule,
    NzCheckboxModule,
    NzRadioModule,
    NzSwitchModule,
    NzCardModule,
    NzListModule,
    NzAvatarModule,
    NzBadgeModule,
    NzProgressModule,
    NzSpinModule,
    // ...other Ng Zorro components
  ],
})
export class DemoNgZorroAntdModule {}
